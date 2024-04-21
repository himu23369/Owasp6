import boto3

s3 = boto3.resource('s3')

# Get list of objects for indexing
images=[('image1.jpg','Elon Musk'),
      ('image2.jpg','Elon Musk'),
      ('image3.jpg','Bill Gates'),
      ('image4.jpg','Bill Gates'),
      ('sp.jpg','Sundar Pichai'),
      ('sp2.jpg','Sundar Pichai'),
      ('Modi1.jpg','Modi'),
      ('Modi2.jpg','Modi'),
      ('Me.jpg', 'Himanshu'),
      ('Samarjeet.jpg', 'Samarjeet'),
      ('Arshit.jpg', 'Arshit'),
      ('Mehak.jpg', 'Mehak')
      ]

# Iterate through list to upload objects to S3   
for image in images:
    file = open(image[0],'rb')
    object = s3.Object('famouspersonss-imagess','index/'+ image[0])
    ret = object.put(Body=file,
                    Metadata={'FullName':image[1]})
