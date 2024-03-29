import firebase from 'firebase/compat/app';

export default interface IClip {
  uid: string;
  displayName: string;
  title: string | null;
  fileName: string;
  url: string;
  timestamp: firebase.firestore.FieldValue;
  docID?: string;
}
