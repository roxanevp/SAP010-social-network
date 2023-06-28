import {
  collection,
  query,
  addDoc,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../Firebase/instalfirebase';

export const getFeedItems = (renderItems) => {
  const feedPost = collection(db, 'Post');
  const q = query(feedPost, orderBy('createdAt', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    const feedItems = [];
    querySnapshot.forEach((doc) => {
      const item = {
        id: doc.id,
        ...doc.data(),
      };
      feedItems.push(item);
    });

    renderItems(feedItems);
  });
};

export const publish = async (post) => {
  await addDoc(collection(db, 'Post'), post);
};
