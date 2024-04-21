# backend/server.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import time
import os
import boto3
import io
from PIL import Image
from werkzeug.utils import secure_filename
import threading
from attendance import recordAttandanceIn, recordAttandanceOut
from time import sleep

app = Flask(__name__)
CORS(app)

# Initialize AWS services
s3 = boto3.resource('s3')
rekognition = boto3.client('rekognition', region_name='us-east-1')
dynamodb = boto3.client('dynamodb', region_name='us-east-1')
monitering_state = False
# Load the Haar Cascade Classifier for face detection
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
video_capture = cv2.VideoCapture(0)

# Store uploaded images information
# images = [
#     ('image1.jpg', 'Elon Musk'),
#     ('image2.jpg', 'Elon Musk'),
#     ('image3.jpg', 'Bill Gates'),
#     ('image4.jpg', 'Bill Gates'),
#     ('image5.jpg', 'Sundar Pichai'),
#     ('image6.jpg', 'Sundar Pichai'),
#     ('my_pic.jpg', 'Modi'),
#     ('Me.jpg', 'Himanshu')
# ]

def upload_images_to_s3(images):
    for image in images:
        file = open(image[0],'rb')
        object = s3.Object('famouspersonss-imagess','index/'+ image[0])
        ret = object.put(Body=file,
                        Metadata={'FullName':image[1]})

# Function to capture a frame and save it to a file
def capture_frame(frame, filename):
    cv2.imwrite(filename, frame)

# Function to get capture time from filename
def get_capture_time(filename):
    timestamp = filename.split("_")[-1].split(".")[0]
    return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(float(timestamp)))

# Function to detect faces in a frame
def detect_faces(frame):
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)
    return faces

# Function to perform face recognition using Rekognition
def perform_face_recognition(image_binary):
    try:
        response = rekognition.search_faces_by_image(
            CollectionId='famouspersons',
            Image={'Bytes': image_binary}
        )
    except Exception as e:
        return {"FaceMatches": []}
    return response

# Function to save captured frame and recognize faces
def save_and_recognize_faces(frame):
    filename = f"captured_frame_{time.time()}.jpg"
    capture_frame(frame, filename)
    capture_time = get_capture_time(filename)
    print(f"Image captured at: {capture_time}")

    with open(filename, "rb") as image_file:
        image = Image.open(image_file)
        stream = io.BytesIO()
        image.save(stream, format="JPEG")
        image_binary = stream.getvalue()
        response = perform_face_recognition(image_binary)

    found = False
    for match in response['FaceMatches']:
        print(match['Face']['FaceId'], match['Face']['Confidence'])
        face = dynamodb.get_item(
            TableName='face_recognition',  
            Key={'RekognitionId': {'S': match['Face']['FaceId']}}
        )
        if 'Item' in face:
            print("Found Person: ", face['Item']['FullName']['S'])
            #try catch block
            try:
                recordAttandanceOut(face['Item']['FullName']['S'])
            except:
                print("Error in recording attendance in Firebase")
            found = True
    if not found:
        print("Person cannot be recognized")

# Route for uploading an image
@app.route('/upload', methods=['POST'])
def upload_image():
    file = request.files['image']
    name = request.form['name']
    
    filename = secure_filename(file.filename)
    file.save(filename)

    # images.append((filename, name))
    upload_images_to_s3([(filename, name)]) 
    
    # print(images)
    return jsonify({"message": "Image uploaded successfully."}), 200

# Route for monitoring webcam
@app.route('/monitor', methods=['POST'])
def monitor_webcam():
    # Start monitoring in a separate thread
    threading.Thread(target=monitor_thread).start()
    # if monitering_state:
    #     return jsonify({"message": "Monitoring Stoped."}), 200
    # else:
    #     return jsonify({"message": "Monitoring started."}), 200
    return jsonify({"message": "Monitoring started."}), 200

# Monitoring function to run in a separate thread
def monitor_thread():
    
    while True:
        ret, frame = video_capture.read()
        if ret:
            faces = detect_faces(frame)
            if len(faces) > 0:
                save_and_recognize_faces(frame)
        sleep(5)

if __name__ == '__main__':
    app.run()
