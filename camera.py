import cv2
import time
import os
import boto3
import io
from PIL import Image

save_folder = "image_captured_camera"

# Initialize AWS clients
rekognition = boto3.client('rekognition', region_name='us-east-1')
dynamodb = boto3.client('dynamodb', region_name='us-east-1')

def capture_frame(frame, filename, capture_entire_frame=True):
    """Saves the captured frame or cropped face region.

    Args:
        frame: The frame captured from the webcam.
        filename: The filename to save the image under.
        capture_entire_frame: Boolean flag indicating whether to save the entire frame (True) or just the cropped face region (False).
    """
    if capture_entire_frame:
        cv2.imwrite(filename, frame)
    else:
        # Extract face region if faces are detected
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)
        if len(faces) > 0:
            for (x, y, w, h) in faces:
                face_frame = frame[y:y+h, x:x+w]  # Extract face region from frame
                cv2.imwrite(filename, face_frame)

def get_capture_time(filename):
    """Extracts the capture time from the filename.

    Args:
        filename: The filename containing the timestamp.

    Returns:
        A string representing the capture time in a human-readable format.
    """
    timestamp = filename.split("_")[-1].split(".")[0]
    return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(float(timestamp)))

# Load the pre-trained Haar cascade classifier for face detection
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

# Initialize webcam capture
video_capture = cv2.VideoCapture(0)

# Choose between capturing entire frame or cropped face region
capture_entire_frame = False  # Set to False to capture only faces

last_capture_time = time.time()  # Initialize last capture time

while True:
    # Capture frame-by-frame
    ret, frame = video_capture.read()

    # Convert the BGR frame to grayscale for faster processing
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect faces in the grayscale frame
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)

    # Draw a rectangle around each detected face
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)

    # Capture frame or face region with time check (every 10 seconds)
    current_time = time.time()
    if len(faces) > 0 and current_time - last_capture_time > 5:
        if capture_entire_frame:
            filename = os.path.join(save_folder, f"captured_frame_{current_time}.jpg")
        else:
            filename = os.path.join(save_folder, f"detected_face_{current_time}.jpg")
        capture_frame(frame.copy(), filename, capture_entire_frame)
        last_capture_time = current_time  # Update last capture time

        # Print the capture time
        capture_time = get_capture_time(filename)
        print(f"Image captured at: {capture_time}")

        # Perform face recognition with Rekognition
        with open(filename, "rb") as image_file:
            image=Image.open(image_file)
            stream=io.BytesIO()
            image.save(stream,format="JPEG")
            image_binary=stream.getvalue()
            response = rekognition.search_faces_by_image(
                CollectionId='famouspersons',
                Image={'Bytes': image_binary}
            )
        found=False
        for match in response['FaceMatches']:
            print (match['Face']['FaceId'],match['Face']['Confidence'])

            face = dynamodb.get_item(
                 TableName='face_recognition',  
                 Key={'RekognitionId': {'S': match['Face']['FaceId']}}
                )
            if 'Item' in face:
                print ("Found Person: ",face['Item']['FullName']['S'])
                found = True
        if not found:
            print("Person cannot be recognized")        

    # Display the resulting frame
    cv2.imshow('Real-time Face Detection with Capture', frame)

    # Exit if 'q' key is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the capture and close all windows
video_capture.release()
cv2.destroyAllWindows()
