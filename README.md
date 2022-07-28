## Using Firebase Cloud Storage with React to Upload Files to Cloud

### This repo shows how to create use firebase storage to upload and download files to cloud from a React 

### FOR IT TO WORK CORRECTLY, IT IS NECESSARY TO CHANGE THE STORAGE RULES:
            rules_version = '2';
            service firebase.storage {
            match /b/{bucket}/o {
                match /{allPaths=**} {
                allow read, write: if true;
                }
            }
            }

#### 📚 References:

Firebase: https://firebase.google.com

Firebase Storage: https://firebase.google.com/docs/storage   
