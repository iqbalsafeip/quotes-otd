import { firebase, app } from '../firebase/index';

// provider google auth
const Provider = new firebase.auth.GoogleAuthProvider();

// action login
export const authUser = (data) => (dispatch) => {
	firebase
		.auth()
		.signInWithPopup(Provider)
		.then((result) => {
			dispatch({ type: 'SET_USER', value: result });
			console.log(result.additionalUserInfo.profile);

			dispatch({ type: 'SET_PROFILE', value: result.additionalUserInfo.profile });
			dispatch({ type: 'SET_AUTH', value: true });
		})
		.catch((err) => {
			console.log(err);
		});
};

export const insertQuotes = (data) => (dispatch) => {
	return new Promise((resolve, reject) => {
		app
			.database()
			.ref()
			.child('quotes')
			.push(data)
			.then((res) => {
				resolve(res);
			})
			.catch((e) => {
				reject(e);
			});
	});
};

// action to get all the quotes
export const getQuotes = (data) => (dispatch) => {
	dispatch({ type: 'SET_QLOAD', value: true });
	var quotesRef = app.database().ref().child('quotes');
	quotesRef.on('value', async function(snap) {
		const MAX = Math.floor(Math.random() * snap.numChildren() + 1);
		quotesRef.limitToFirst(MAX).on('value', async function(snapshot) {
			dispatch({ type: 'INSERT_QUOTES', value: await snapshot.val() });
			dispatch({ type: 'SET_QLOAD', value: false });
		});
	});
};

// action to check if user is have already logged in or not
export const checkUser = () => (dispatch) => {
	dispatch({ type: 'SET_ALOAD', value: true });
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			const { displayName, photoURL } = user;
			dispatch({ type: 'SET_USER', value: { displayName, photoURL } });
			dispatch({ type: 'SET_AUTH', value: true });
		}
		dispatch({ type: 'SET_ALOAD', value: false });
	});
};

export const logoutAPI = () => (dispatch) => {
	firebase
		.auth()
		.signOut()
		.then(function() {
			dispatch({ type: 'SET_AUTH', value: false });
			dispatch({ type: 'SET_USER', value: {} });
		})
		.catch(function(error) {
			// An error happened.
		});
};
