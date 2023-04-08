import { useEffect, useRef } from "react";

const MessengerPlugin = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.setAttribute("page_id", "105178919077646");
    ref.current.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v16.0",
      });
    };

    (function (d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <div>
      <div id="fb-root" />
      <div ref={ref} id="fb-customer-chat" className="fb-customerchat" />
    </div>
  );
};

export default MessengerPlugin;
