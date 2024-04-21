import firebase_admin
from firebase_admin import credentials
from firebase_admin import storage
from firebase_admin import firestore
from datetime import datetime

cred = credentials.Certificate("credential.json")# download service account key by creating your project on firebase 
firebase_admin.initialize_app(cred,{
    'databaseURL': "https://aashram-241ee-default-rtdb.asia-southeast1.firebasedatabase.app/",
    'storageBucket': "gs://aashram-241ee.appspot.com",
})
bucket = storage.bucket()
db = firestore.client()


def recordAttandanceIn(id):
    collection = db.collection('Attendance-In')
    timestamp = datetime.now()
    date = timestamp.strftime("%Y-%m-%d")
    time = timestamp.strftime('%H:%M')

    try:
        attendance = collection.document(str(id)).get().to_dict()
        attendance[date].append(time)
        collection.document(str(id)).update(attendance)
    except:
        collection.document(str(id)).update({
            date : [time]
        })

    
def recordAttandanceOut(id):
    collection = db.collection('Attendance-Out')
    timestamp = datetime.now()
    date = timestamp.strftime("%Y-%m-%d")
    time = timestamp.strftime('%H:%M')

    try:
        attendance = collection.document(str(id)).get().to_dict()
        attendance[date].append(time)
        collection.document(str(id)).update(attendance)
    except:
        collection.document(str(id)).update({
            date : [time]
        })
