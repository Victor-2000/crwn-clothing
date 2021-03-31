import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firestore.firestore();

firestore
  .collection("users")
  .doc("dFoZGCOmDSVjkwEp7LVR")
  .collection("cart")
  .doc("5NMJEgTcE3UUC1vl36hL");

firestore.doc("/users/dFoZGCOmDSVjkwEp7LVR/cart/5NMJEgTcE3UUC1vl36hL");
firestore.collection("/users/dFoZGCOmDSVjkwEp7LVR/cart");
