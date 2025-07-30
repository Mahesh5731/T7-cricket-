// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Live Score Display
db.ref("live/score").on("value", snapshot => {
  document.getElementById("liveScore").innerText = "Score: " + snapshot.val();
});

db.ref("live/batsmen").on("value", snapshot => {
  let output = "<h3>Batsmen</h3>";
  snapshot.forEach(child => {
    output += `<p>${child.val().name} - ${child.val().runs} runs</p>`;
  });
  document.getElementById("batsmen").innerHTML = output;
});

db.ref("live/bowler").on("value", snapshot => {
  const data = snapshot.val();
  document.getElementById("bowler").innerText = `Bowler: ${data.name}, Overs: ${data.overs}, Runs: ${data.runs}`;
});

// Admin Update
if (document.getElementById("scoreForm")) {
  document.getElementById("scoreForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const batsman = document.getElementById("batsman").value;
    const runs = parseInt(document.getElementById("runs").value);
    const ballType = document.getElementById("ballType").value;

    const newScoreRef = db.ref("live/score");
    newScoreRef.transaction(score => (score || 0) + runs);

    const newBall = {
      name: batsman,
      runs: runs,
      type: ballType,
      timestamp: Date.now()
    };
    db.ref("live/balls").push(newBall);
  });
}
