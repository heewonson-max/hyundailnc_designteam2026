// Secret Manitto · 저장 서버 설정
// Firebase 콘솔 > 프로젝트 설정(톱니바퀴) > 일반 > 내 앱 > "SDK 설정 및 구성"의 값을 그대로 붙여 넣으세요.
// 이 값들은 공개되어도 괜찮은 값입니다. 데이터 보호는 firestore.rules가 담당합니다.
window.SM_CONFIG = {
  firebase: {
    apiKey: "AIzaSyD-tvzRlNJJ6BXfGcUgJZm8lpieQqrf-6Y",
    authDomain: "designteam-9bea4.firebaseapp.com",
    projectId: "designteam-9bea4",
    storageBucket: "designteam-9bea4.firebasestorage.app",
    messagingSenderId: "995889098985",
    appId: "1:995889098985:web:79aca374540a73b1e90078"
  },
  // 관리 화면(#admin)에 들어올 수 있는 관리자 이메일. firestore.rules에도 같은 이메일을 적어야 합니다.
  adminEmails: ["hwson98@naver.com"]
};
