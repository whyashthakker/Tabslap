import Script from 'next/script'
import React from 'react'

const SmartlookScript = () => {
  const smartlookCode = `
    window.smartlook || (function (d) {
      var o = smartlook=function(){ o.api.push(arguments) }, h = d.getElementsByTagName('head')[0];
      var c = d.createElement('script'); o.api = new Array(); c.async = true; c.type = 'text/javascript';
      c.charset = 'utf-8'; c.src = 'https://web-sdk.smartlook.com/recorder.js'; h.appendChild(c);
    })(document);
    smartlook('init', '4e687ab80472d319342344f93e8a4848da4c53fd', { region: 'eu' });
  `;

  return (
    <Script
      id="smartlook"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: smartlookCode }}
    />
  )
}

export default SmartlookScript
