import React from 'react';
import nookies from 'nookies';
import firebaseClient from '../authentication/firebaseClient';
import { verifyIdToken } from '../authentication/firebaseAdmin';
import firebase from 'firebase/app';

function Authenticated({session}) {
  firebaseClient;
  if(session) {
    return(
      <div>
        Welcome User, You're now Authenticated

        <input 
          type="submit" 
          value="Sign out" 
          className="w-full bg-purple-600 active:bg-purple-800 my-2 px-3 py-2 rounded-sm text-sm text-white focus:outline-none"
          onClick={async () => {
            await firebase.auth().signOut();
            window.location.href = "/"
          }}
          />

      </div>
    )
  } else {
    return (
      <div>
        Loading
      </div>
    )
  }
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const {uid, email} = token;
    return {
      props: {session: `Your email is ${email} and your UserId is ${uid}`},
    }
  } catch (error) {
    context.res.writeHead(302, {location: "/account"});
    context.res.end();
    return {props: []};
  }
}

export default Authenticated;