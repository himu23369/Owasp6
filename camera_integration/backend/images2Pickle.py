images = [
    ('image1.jpg', 'Elon Musk'),
    ('image2.jpg', 'Elon Musk'),
    ('image3.jpg', 'Bill Gates'),
    ('image4.jpg', 'Bill Gates'),
    ('image5.jpg', 'Sundar Pichai'),
    ('image6.jpg', 'Sundar Pichai'),
    ('my_pic.jpg', 'Modi'),
    ('Me.jpg', 'Himanshu')
]
import pickle

with open('referenceImages.pkl', 'wb') as f:  # open a text file
    pickle.dump(images, f) # serialize the list