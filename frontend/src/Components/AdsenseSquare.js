import React, { useEffect } from 'react';

const AdSenseSquare = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <div>
        <ins
          class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-2592002415778671"
          data-ad-slot="2813282207"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </>
  );
};

export default AdSenseSquare;
