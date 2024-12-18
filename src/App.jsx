import { useState } from "react";
import { useTimer } from "../useTimer";

const resendTimeout = 10 * 1000; // 10 sec
const updateInterval = 1000; // 1 sec

function App() {
  const [sentAt, setSentAt] = useState();

  const now = useTimer(updateInterval, sentAt, now => {
    if (sentAt && resendTimeout - (now - sentAt) < 0) {
      setSentAt();
    }
  });

  const msTilNextRequest = sentAt ? resendTimeout - (now - sentAt) : 0;
  const isDisabled = msTilNextRequest > 0; // disable the button until it's allowed to resend the request

  const handleSendRequest = () => {
    // code to send a request here
    setSentAt(Date.now());
  };

  return (
    <main>
      <button disabled={isDisabled} onClick={handleSendRequest}>
        {isDisabled
          ? `wait ${Math.floor(msTilNextRequest / 1000)} sec`
          : "Reset Password"}
      </button>
    </main>
  );
}

export default App;
