import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Typography } from '@material-tailwind/react';

const FootherPrivacyPolicy = () => {
  const heightNav = useSelector((state: RootState) => state.size.heightNav);
  return (
    <div style={{ paddingTop: `${heightNav}px` }}>
      <div className="px-[20%] py-[5%]">
        <Typography variant="h1">DATA PROTECTION</Typography>

        <Typography className="mt-5">
          <Typography className="font-bold">
            Declaration on data protection
          </Typography>
        </Typography>
        <Typography className="mt-5">
          Unless otherwise specified below, the provision of your personal data
          is neither required by law or contract nor necessary for the
          conclusion of a contract. You are not obliged to provide your data.
          Failure to provide it will have no consequences. This only applies as
          long as nothing else arises from the processing procedures below.
          "Personal data" means any information relating to an identified or
          identifiable natural person.
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">Server log files</Typography>
        </Typography>
        <Typography className="mt-5">
          You can use our websites without submitting personal data.
        </Typography>
        <Typography className="mt-5">
          Every time you access our website, your internet browser transmits
          usage data to us or our web hosters/IT service providers and stores it
          in server log files. This stored data includes, for example, the name
          of the page accessed, the date and time of the request, the IP
          address, the amount of data transferred and the requesting provider.
          The processing is based on Article 6 (1) f) DSGVO due to our
          legitimate interest in ensuring the smooth operation of our website
          and improving our services.
        </Typography>
        <Typography className="mt-5">
          Your data will be transferred to Canada, among other countries. The
          transfer of data to Canada is subject to an adequacy decision by the
          EU Commission.
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">Contact</Typography>
        </Typography>
        <Typography className="mt-5">
          You can contact us at any time. The contact details of the data
          controller can be found in our imprint. Proactive contacting of the
          customer by e-mail. If you contact us proactively by e-mail, we
          collect your personal data (name, e-mail address, message text) only
          to the extent you specify. The purpose of the data processing is the
          handling and answering of your contact request. If the first contact
          serves to carry out pre-contractual measures (e.g. consultation in
          case of interest in purchase, order preparation) or if it concerns an
          already concluded contract between you and us, this data processing is
          carried out on the basis of Article 6 (1) (b) DSGVO. If the first
          contact is made for other reasons, this data processing is carried out
          on the basis of Article 6(1)(f) DSGVO for the purpose of our
          overriding legitimate interest in processing and responding to your
          enquiry. In this case, you have the right to object at any time, on
          grounds relating to your particular situation, to the processing of
          personal data concerning you which is carried out on the basis of
          Article 6(1)(f) DSGVO. We will only use your email address to process
          your request. Your data will then be deleted in compliance with the
          statutory retention periods, unless you have consented to further
          processing and use.
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">Orders</Typography>
        </Typography>
        <Typography className="mt-5">
          Collection, processing and disclosure of personal data in orders
        </Typography>
        <Typography className="mt-5">
          When you place an order, we collect and use your personal data only to
          the extent necessary for the fulfilment and processing of your order
          and for dealing with your enquiries. The provision of the data is
          necessary for the conclusion of a contract. Failure to provide the
          data will result in a contract not being concluded. The processing is
          based on Article 6 (1) b) DSGVO and is necessary for the performance
          of a contract with you.
        </Typography>
        <Typography className="mt-5">
          Your data is passed on, for example, to the shipping companies and
          dropshipping providers selected by you, payment service providers,
          service providers for processing the order and IT service providers.
          In any case, we strictly adhere to the legal requirements. The scope
          of the data transfer is limited to a minimum.
        </Typography>
        <Typography className="mt-5">
          Your data will be transferred to Canada, among other countries. The
          transfer of data to Canada is subject to an adequacy decision by the
          EU Commission.
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">
            Payment service provider
          </Typography>
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">Use of PayPal</Typography>
        </Typography>
        <Typography className="mt-5">
          The PayPal privacy policy applies to all PayPal transactions. You can
          find this
        </Typography>
        <Typography className="mt-5">
          at https://www.paypal.com/de/webapps/mpp/ua/privacy-full?locale.x=en
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">Using PayPal Express</Typography>
        </Typography>
        <Typography className="mt-5">
          Our website uses the PayPal Express payment service from PayPal
          (Europe) S.à.r.l. et Cie, S.C.A. (22-24 Boulevard Royal, L-2449
          Luxembourg; "PayPal").
        </Typography>
        <Typography className="mt-5">
          The processing of the data enables us to offer you the option of
          paying via the PayPal Express payment service. For the integration of
          this payment service, it is necessary that PayPal collects, stores and
          evaluates data when accessing the website (e.g. IP address, device
          type, operating system, browser type, device location). Cookies may be
          used for this purpose. Cookies enable the recognition of your internet
          browser.
        </Typography>
        <Typography className="mt-5">
          The use of cookies or comparable technologies is based on § 15 para. 3
          S. 1 TMG. The processing of your personal data is based on Art. 6
          para. 1 lit. f GDPR due to our overriding legitimate interest in a
          customer-oriented offer of various payment methods. You have the right
          to object to this processing of personal data concerning you at any
          time for reasons arising from your particular situation. By selecting
          and using "PayPal Express", the data required for payment processing
          is transmitted to PayPal in order to process the contract with you via
          the selected payment method. The processing of the data is based on
          Article 6(1)(b) DSGVO.
        </Typography>
        <Typography className="mt-5">
          Further information on data processing when using the Paypal Express
          payment service can be found here in the associated data protection
          declaration.
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">Use of Amazon Payments</Typography>
        </Typography>
        <Typography className="mt-5">
          We use the Amazon Payments payment service from Amazon Payments Europe
          s.c.a. (38 avenue John F. Kennedy, L-1855 Luxembourg; "Amazon
          Payments") on our website.
        </Typography>
        <Typography className="mt-5">
          The processing of the data enables you to pay with the payment service
          Amazon Payments. For the integration of this payment service, it is
          necessary that Amazon Payments collects, stores and evaluates data
          when accessing the website (e.g. IP address, device type, operating
          system, browser type, device location). Cookies may be used for this
          purpose. Cookies enable the recognition of your internet browser.
        </Typography>
        <Typography className="mt-5">
          The use of cookies or comparable technologies is based on § 15 para. 3
          S. 1 TMG. The processing of your personal data is based on Art. 6
          para. 1 lit. f GDPR due to our overriding legitimate interest in a
          customer-oriented offer of various payment methods. You have the right
          to object to this processing of personal data relating to you at any
          time for reasons arising from your particular situation. By selecting
          and using "Amazon Payments", the data required for payment processing
          is transmitted to Amazon Payments in order to process the contract
          with you via the selected payment method. The processing of the data
          is based on Article 6(1)(b) DSGVO.
        </Typography>
        <Typography className="mt-5">
          Further information on data processing when using the Amazon Payments
          payment service can be found in the associated data protection
          statement at: https://pay.amazon.com/de/help/201212490
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">Cookies</Typography>
        </Typography>
        <Typography className="mt-5">
          Our website uses cookies. Cookies are small text files that are stored
          in the user's internet browser or by the user's internet browser on
          their computer system. When a user accesses a website, a cookie may be
          stored on the user's operating system. This cookie contains a
          characteristic string of characters that enables the browser to be
          uniquely identified when the website is called up again. The cookies
          are stored on your computer. You therefore have full control over the
          use of cookies. By making the appropriate technical settings in your
          internet browser, you can be notified before cookies are set and
          decide whether to accept them in each individual case, as well as
          prevent cookies from being stored and the data they contain from being
          transmitted. Cookies that have already been stored can be deleted at
          any time. However, we would like to point out that in this case you
          may not be able to use all the functions of this website to their full
          extent.
        </Typography>
        <Typography className="mt-5">
          You can use the links below to find out how to manage (or disable)
          cookies in the main browsers, among others:
        </Typography>
        <Typography className="mt-5">
          Chrome browser: https://support.google.com/accounts/answer/61416?hl=en
        </Typography>
        <Typography className="mt-5">
          Internet Explorer:
          https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies
        </Typography>
        <Typography className="mt-5">
          Mozilla Firefox:
          https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
        </Typography>
        <Typography className="mt-5">
          Safari:
          https://support.apple.com/de-de/guide/safari/manage-cookies-and-website-data-sfri11471/mac
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">
            Third party products and services
          </Typography>
        </Typography>
        <Typography className="mt-5">
          Our websites and apps allow you to interact with a variety of other
          digital products and services. For example, our websites and apps may
          integrate with third-party activity tracking devices, social networks,
          music streaming services and other digital services.
        </Typography>
        <Typography className="mt-5">
          If you choose to connect your HEIMPLANETaccount with a third party
          device or account, your privacy rights on third party platforms are
          subject to the respective policies of those platforms. For example, if
          you choose to share your HEIMPLANETactivities on third-party social
          media platforms, the policies of those platforms will apply to the
          data stored there.
        </Typography>
        <Typography className="mt-5">
          Our websites and apps may contain links to other websites and apps
          (from third parties) for your convenience or information. Linked
          websites and apps have their own privacy notices or policies, which we
          strongly encourage you to review. To the extent linked websites or
          apps are not owned or controlled by us, we are not responsible for
          their content, use of the websites or apps, or the privacy practices
          of the websites or apps.
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">Google Analytics</Typography>
        </Typography>
        <Typography className="mt-5">
          Google Analytics is a service provided by Google Inc, 1600
          Amphitheatre Parkway, Mountain View, CA 94043, USA ("Google"). Google
          Analytics uses "cookies", which are text files placed on your
          computer, to help the website analyse how users use the site. The
          information collected by the cookie about your use of our website
          (including your IP address) will be transmitted to and stored by
          Google on servers in the United States. We would like to point out
          that on our websites Google Analytics has been extended by the code
          "gat._anonymizeIp();" to ensure anonymised collection of IP addresses
          (so-called IP masking). Your IP address is therefore only recorded by
          Google in shortened form at our request, which ensures anonymisation
          and does not allow any conclusions to be drawn about your identity. If
          IP anonymisation is activated on our websites, your IP address will be
          shortened by Google within member states of the European Union or in
          other contracting states to the Agreement on the European Economic
          Area. Only in exceptional cases will the full IP address be
          transmitted to a Google server in the USA and shortened there. Google
          will use this information for the purpose of evaluating your use of
          our website, compiling reports on website activity for website
          operators and providing other services relating to website activity
          and internet usage. The IP address transmitted by your browser as part
          of Google Analytics will not be merged with other Google data. A
          transfer of this data by Google to third parties only takes place on
          the basis of legal provisions or within the framework of commissioned
          data processing. Under no circumstances will Google merge your data
          with other data collected by Google. By using this website, you
          consent to the processing of data about you by Google and the manner
          in which it is processed and for the purposes set out above. You may
          refuse the use of cookies by selecting the appropriate settings on
          your browser, however please note that if you do this you may not be
          able to use the full functionality of this website. Furthermore, you
          can prevent the collection of the data generated by the cookie and
          related to your use of the website (incl. your IP address) to Google
          as well as the processing of this data by Google by downloading and
          installing the browser plugin available under the following link.
          Further information on Google Analytics and data protection can be
          found at http://tools.google.com/dlpage/gaoptout?hl=en.
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">Google AdWords</Typography>
        </Typography>
        <Typography className="mt-5">
          We use the online advertising programme "Google AdWords" on our
          website and in this context Conversion Tracking (visit action
          evaluation). Google Conversion Tracking is an analysis service
          provided by Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA
          94043, USA; "Google"). When you click on an ad placed by Google, a
          conversion tracking cookie will be placed on your computer. These
          cookies have a limited validity, do not contain any personal data and
          are therefore not used for personal identification. If you visit
          certain pages of our website and the cookie has not yet expired,
          Google and we will be able to recognise that you clicked on the ad and
          were redirected to that page. Each Google AdWords customer receives a
          different cookie. This means that it is not possible to track cookies
          on the websites of AdWords customers. The information collected using
          the conversion cookie is used to create conversion statistics. This
          tells us the total number of users who clicked on one of our ads and
          were redirected to a page with a conversion tracking tag. However, we
          do not receive any information that personally identifies the user.
          The processing is carried out on the basis of Art. 6 (1) f DSGVO for
          the legitimate interest in targeted advertising and the analysis of
          the effect and efficiency of this advertising. You have the right to
          object at any time to the processing of your personal data based on
          Art. 6 (1) f DSGVO for reasons relating to your particular situation.
          You can prevent cookies from being saved by making the appropriate
          technical settings in your browser software. However, we would like to
          point out that in this case you may not be able to use all functions
          of this website to their full extent. You will then not be included in
          the conversion tracking statistics. You can also deactivate
          personalised advertising for you in Google's advertising settings. You
          can find instructions at
          https://support.google.com/ads/answer/2662922?hl=en.
        </Typography>
        <Typography className="mt-5">
          In addition, you can disable the use of cookies by third parties by
          visiting the Network Advertising Initiative opt-out page at
          https://www.networkadvertising.org/choices/ and implementing the
          additional opt-out information described there. Further information
          and Google's privacy policy can be found at:
          https://policies.google.com/privacy?hl=en
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">Facebook remarketing</Typography>
        </Typography>
        <Typography className="mt-5">
          We use the remarketing function "Custom Audiences" of Facebook Inc.
          (1601 p. California Ave, Palo Alto, CA 94304, USA; "Facebook"). This
          function serves the purpose of targeting visitors to the website with
          interest-based advertising on the social network Facebook. For this
          purpose, the Facebook remarketing tag has been implemented on the
          website. This tag establishes a direct connection to the Facebook
          servers when the website is visited. This transmits to the Facebook
          server which of our pages you have visited. Facebook associates this
          information with your personal Facebook account. When you visit the
          Facebook social network, you are shown personalised, interest-based
          Facebook advertisements. The processing is carried out on the basis of
          Art. 6 (1) f GDPR for the legitimate interest in the aforementioned
          purpose. You have the right to object at any time to the processing of
          your personal data on the basis of Art. 6 (1) f GDPR for reasons
          relating to your particular situation. You can deactivate the "Custom
          Audiences" remarketing function here. For more information about the
          collection and use of data by Facebook, your rights and options for
          protecting your privacy, please refer to Facebook's privacy policy at
          https://www.facebook.com/about/privacy/.
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">
            Realignment / Remarketing
          </Typography>
        </Typography>
        <Typography className="mt-5">
          Our websites use so-called retargeting technologies. We use these
          technologies to make our website more interesting for you. With this
          technology, internet users who have already shown interest in our shop
          and our products can be addressed with advertisements on our partners'
          websites. We are convinced that the display of personalised,
          interest-related advertising is generally more interesting for
          Internet users than advertising that has no such personal reference.
          The display of these advertisements on the pages of our partners is
          based on cookie technology and an analysis of previous user behaviour.
          This form of advertising is completely pseudonymous. No usage profiles
          are merged with your personal data. By using our site, you agree to
          the use of so-called cookies and thus to the collection, storage and
          use of your usage data. Furthermore, your data is stored in cookies
          beyond the end of the browser session and can, for example, be
          retrieved the next time you visit the website. You can revoke this
          consent at any time with effect for the future by refusing to accept
          cookies in your browser settings.
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">Pinterest</Typography>
        </Typography>
        <Typography className="mt-5">
          We also use the Pinterest tag of Pinterest Europe Ltd, Palmerston
          House, 2nd Floor, Fenian Street, Dublin 2, Ireland on this website.
          This is a JavaScript code that we use to collect conversion insights
          and create audiences based on visitors' activity on our website. This
          means that we use the Pinterest tag to measure and improve the
          effectiveness of ads on Pinterest and to personalise ads by
          determining what type of ads to show to users. As part of conversion
          tracking, we process the following data from you: which pages you have
          visited, such as product, article and category pages, which enquiries
          you have made on our website, which products and services on our
          website and from third-party providers such as Pinterest you are
          interested in, which items you have added to your shopping cart, which
          transactions you have completed, which videos you have watched and
          which products or services you have registered for (e.g. registration
          for a newsletter subscription, webshop account).
        </Typography>
        <Typography className="mt-5">
          If you have consented to the processing of your personal data through
          the use of the Pinterest tag and wish to withdraw your consent, you
          can change your cookie settings. You also have the option to change
          your browser settings.
        </Typography>
        <Typography className="mt-5">
          Alternatively, if you have agreed, you can deactivate the Pinterest
          marketing tag as a logged-in Pinterest user in your account settings
          at
          https://help.pinterest.com/en/article/personalized-ads-on-pinterest.
          Information on how to opt out of interest-based online advertising on
          and through Pinterest at a later date without logging in.
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">TikTok</Typography>
        </Typography>
        <Typography className="mt-5">
          We use on this website the so-called "TikTok pixel" of the provider
          TikTok (for EU: TikTok Information Technologies UK Limited, Aviation
          House, 125 Kingsway Holborn, London, WC2B 6NH.). This is a code which
          we have implemented on our site. With the help of this code, in case
          of your explicit consent, a connection with the TikTok servers is
          established when you visit our website in order to track your behavior
          on our website. For example, when you purchase a product on our
          website, the TikTok pixel is triggered and stores your actions on our
          website in one or more cookies. You have the option to revoke your
          consent at any time with effect for the future. There are no costs for
          this other than the basic rates.Personal data such as the IP address
          and other information such as device ID, device type and operating
          system may also be transferred to TikTok. TikTok uses email or other
          login or device information to identify users of our website and
          associate their actions with a TikTok user account.TikTok uses this
          data to display targeted and personalized advertising to its users and
          to create interest-based user profiles. The collected data is
          anonymous and not visible to us and is only used to measure the
          effectiveness of ad placements.In principle, your data will be
          processed within the EU or the EEA. For this purpose, a corresponding
          data protection agreement has been concluded with TikTok. If personal
          data is transferred to countries outside the EU or EEA, this is done
          within the framework of the Commission's model contracts for the
          transfer of personal data to third countries (i.e. standard
          contractual clauses).You can find TikTok's privacy policy here:{' '}
          <a
            href="https://www.tiktok.com/legal/new-privacy-policy?lang=de-DE"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.tiktok.com/legal/new-privacy-policy?lang=de-DE
          </a>
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">Mailchimp</Typography>
        </Typography>
        <Typography className="mt-5">
          We use the service of Rocket Science Group LLC (675 Ponce de Leon Ave
          NE, Suite 5000 Atlanta, GA 30308, USA; "Mailchimp") for the newsletter
          dispatch within the scope of an order processing.We pass on the
          information provided by you during the newsletter registration (e-mail
          address, first and last name, if applicable) to Mailchimp. The data
          processing serves the purpose of sending the newsletter and its
          statistical evaluation.In order to evaluate newsletter campaigns, the
          sent newsletters contain a 1x1 pixel graphic (tracking pixel) or a
          tracking link. This enables us to determine whether you have opened
          the newsletter and whether you have clicked on any integrated links.
          In this context, we collect your personal data such as IP address,
          browser type and device as well as the time. From this data, usage
          profiles can be created under a pseudonym. The collected data will not
          be used to identify you personally. The collected data is only used
          for statistical analysis to improve newsletter campaigns.
        </Typography>
        <Typography className="mt-5">
          Your data is usually transmitted to Mailchimp servers in the USA and
          stored there. There is no adequacy decision of the EU Commission for
          the USA. The data transfer takes place, among other things, on the
          basis of standard contractual clauses as appropriate guarantees for
          the protection of personal data, viewable at:
          https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_de
          (https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_de).
        </Typography>

        <Typography className="mt-5">
          The processing of your personal data is based on Art. 6 (1) lit. f
          DSGVO from our overriding legitimate interest in a targeted,
          promotional and user-friendly newsletter system. You have the right to
          object to this processing of personal data relating to you at any time
          for reasons arising from your particular situation. You can find more
          information and the privacy policy of MailChimp at:
          https://mailchimp.com/de/legal/data-processing-addendum/
          (https://mailchimp.com/de/legal/data-processing-addendum/) and
          https://www.intuit.com/privacy/statement/
          (https://www.intuit.com/privacy/statement/).{' '}
          <Typography className="font-bold"></Typography>
        </Typography>

        <Typography className="mt-5">
          <Typography className="font-bold">Klaviyo</Typography>
        </Typography>
        <Typography className="mt-5">
          Our e-mail newsletters are sent via the technical service provider
          Klaviyo, 225 Franklin St, Boston, MA 02110, USA
          (http://www.klaviyo.com), to whom we pass on the data you provided
          when registering for the newsletter. This transfer takes place in
          accordance with Art. 6 (1) lit. f DSGVO and serves our legitimate
          interest in using a newsletter system that is effective in
          advertising, secure and user-friendly. Please note that your data is
          usually transferred to a Klaviyo server in the USA and stored there.
        </Typography>
        <Typography className="mt-5">
          Klaviyo uses this information to send the newsletter on our behalf.
          Klaviyo does not use the data of our newsletter recipients to write to
          them itself or to pass it on to third parties. To protect your data in
          the USA, we have a data processing agreement with Klaviyo ("Data
          Processing Agreement"), in which Klaviyo undertakes to protect the
          data of our users, to process it on our behalf in accordance with its
          data protection provisions and, in particular, not to pass it on to
          third parties. You can view Klaviyo's privacy policy here:{' '}
          <a
            href="https://www.klaviyo.com/privacy/legal/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.klaviyo.com/privacy/legal/privacy/
          </a>
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">
            Enterprise Resource Planning
          </Typography>
        </Typography>
        <Typography className="mt-5">
          Use of an external merchandise management system. We use an enterprise
          resource planning system for contract processing within the scope of
          order processing. For this purpose, your personal data collected in
          the context of the order will be transmitted to JTL-Software-GmbH,
          Rheinstr. 7, 41836 Hückelhoven.
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">
            Changes to our data protection policy
          </Typography>
        </Typography>
        <Typography className="mt-5">
          Applicable law and our practices change over time. If we decide to
          update our privacy policy, we will post the changes on our websites
          and apps. If we make any material changes to the way we process your
          personal data, we will notify you in advance or, where required by
          law, obtain your consent before implementing those changes. We
          strongly encourage you to read our Privacy Policy and keep up to date
          with our practices. This Privacy Policy was last amended in May 2018.
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">
            Technically necessary cookies
          </Typography>
        </Typography>
        <Typography className="mt-5">
          Unless otherwise stated in the following privacy policy, we only use
          these technically necessary cookies to make our offer more
          user-friendly, effective and secure. Cookies also enable our systems
          to recognise your browser after a page change and to offer you
          services. Some functions of our website cannot be offered without the
          use of cookies. These services require that the browser is recognised
          after a page change.
        </Typography>
        <Typography className="mt-5">
          The processing is based on Art. 6 (1) lit. f GDPR due to our
          overriding legitimate interest in ensuring the optimal functionality
          of the website as well as a user-friendly and effective design of our
          offer. You have the right to object to this processing of your
          personal data pursuant to Art. 6 (1) lit. f GDPR on grounds relating
          to your personal situation.
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">
            Rights of the data subjects and storage period
          </Typography>
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">Duration of storage</Typography>
        </Typography>
        <Typography className="mt-5">
          After completion of the contract, the data will initially be stored
          for the duration of the warranty period, thereafter in accordance with
          the statutory, in particular tax and commercial law retention periods
          and deleted after expiry of the period, unless you have consented to
          further processing and use.
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">
            Rights of the data subject
          </Typography>
        </Typography>
        <Typography className="mt-5">
          If the legal requirements are met, you have the following rights
          according to Art. 15 to 20 GDPR. 15 to 20 GDPR: Right of access,
          rectification, erasure, restriction of processing, data portability.
          You also have the right to object to processing based on Art. 6 (1)
          GDPR and to processing for direct marketing purposes pursuant to Art.
          21 (1) GDPR.
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">
            Right to complain to the regulatory authority
          </Typography>
        </Typography>
        <Typography className="mt-5">
          You have the right to complain to the supervisory authority under Art.
          77 GDPR if you believe that your data is not being processed lawfully.
        </Typography>
        <Typography className="mt-5">
          <Typography className="font-bold">Right to object</Typography>
        </Typography>
        <Typography className="mt-5">
          If the data processing presented here is based on our legitimate
          interests pursuant to Article 6(1)(f) DSGVO, you have the right to
          object to the processing of your data at any time with effect for the
          future on grounds relating to your particular situation. If the
          objection is successful, we will no longer process the personal data
          unless we can demonstrate compelling legitimate grounds for the
          processing which override your interests or rights and freedoms, or
          the processing is for the assertion, exercise or defence of legal
          claims.
        </Typography>
      </div>
    </div>
  );
};

export default FootherPrivacyPolicy;
