import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Typography } from '@material-tailwind/react';
const FootherAgbPage = () => {
  const heightNav = useSelector((state: RootState) => state.size.heightNav);
  return (
    <div style={{ paddingTop: `${heightNav}px` }}>
      <div className="px-[20%] py-[5%]">
        <Typography variant="h1">AGB</Typography>
        <Typography className="font-bold mt-10">
          General Terms and Conditions and Customer Information
        </Typography>
        <div className="mt-5">
          <Typography className="font-bold">
            I. General Terms and Conditions
          </Typography>
        </div>

        <div className="mt-5">
          <Typography className="font-bold">§ 1 Basic Provisions</Typography>
        </div>

        <div className="mt-5">
          <Typography>
            (1) The following terms and conditions apply to contracts that you
            enter into with us as the provider (Heimplanet Entwicklungs GmbH)
            via the Internet site https://heimplanet.com/. Unless otherwise
            agreed, we object to the inclusion of any terms and conditions of
            your own that you may have used.
          </Typography>
        </div>
        <div className="mt-5">
          <Typography>
            (2) A consumer within the meaning of the following provisions is any
            natural person who enters into a legal transaction for purposes that
            are predominantly outside his or her trade, business or profession.
            An entrepreneur is any natural or legal person or a partnership with
            legal capacity who, when concluding a legal transaction, acts in the
            exercise of his independent professional or commercial activity.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography className="font-bold">
            § 2 Conclusion of the contract
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            (1) The subject of the contract is the sale of goods .
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            (2) Already with the placement of the respective product on our
            website, we submit a binding offer to conclude a contract via the
            online shopping cart system on the terms and conditions stated in
            the item description.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            (3) The contract is concluded via the online shopping cart system as
            follows: The goods intended for purchase are placed in the "shopping
            cart". You can call up the "shopping cart" via the corresponding
            button in the navigation bar and make changes there at any time.
            After clicking the "Checkout" or "Continue to order" button (or
            similar designation) and entering the personal data as well as the
            payment and shipping terms, the order data will finally be displayed
            to you as an order overview.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            If you use an instant payment system (e.g. PayPal
            (Express/Plus/Checkout), Amazon Pay, Sofort, giropay) as a payment
            method, you will either be redirected to the order overview page in
            our online store or to the website of the instant payment system
            provider. If you are redirected to the respective instant payment
            system, make the appropriate selection or enter your data there.
            Finally, on the website of the provider of the instant payment
            system or after you have been redirected back to our online store,
            the order data will be displayed as an order overview.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            Before submitting the order, you have the option to check the
            information in the order overview again, to change it (also via the
            "back" function of the Internet browser) or to cancel the order.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            By sending the order via the corresponding button ("order with
            obligation to pay", "buy" / "buy now", "order with obligation to
            pay", "pay" / "pay now" or similar designation) you declare the
            legally binding acceptance of the offer, whereby the contract is
            concluded.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            (4) The processing of the order and transmission of all information
            required in connection with the conclusion of the contract shall be
            carried out by e-mail, in part automatically. You must therefore
            ensure that the e-mail address you have deposited with us is
            correct, that the receipt of e-mails is technically ensured and, in
            particular, that it is not prevented by SPAM filters.
          </Typography>
        </div>

        <div className="mt-5">§ 3 Right of retention, retention of title</div>

        <div className="mt-5">
          <Typography>
            (1) You may only exercise a right of retention insofar as it
            concerns claims arising from the same contractual relationship.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            (2) The goods remain our property until full payment of the purchase
            price.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography className="font-bold">§ 4 Warranty</Typography>
        </div>

        <div className="mt-5">
          <Typography>
            (1) The statutory rights of liability for defects apply.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            (2) As a consumer, you are requested to check the goods immediately
            upon delivery for completeness, obvious defects and transport damage
            and to notify us and the carrier of any complaints as soon as
            possible. If you fail to do so, this shall have no effect on your
            statutory warranty claims.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            (3) If a feature of the goods deviates from the objective
            requirements, the deviation shall only be deemed to be agreed if you
            were informed of the same by us before submitting the contractual
            declaration and the deviation was expressly and separately agreed
            between the contracting parties.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography className="font-bold">
            § 5 Choice of law, place of performance, place of jurisdiction
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            (1) German law shall apply. In the case of consumers, this choice of
            law shall only apply insofar as the protection granted by mandatory
            provisions of the law of the state of the consumer's habitual
            residence is not withdrawn as a result (favorability principle).
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            (2) The place of performance for all services arising from the
            business relations existing with us as well as the place of
            jurisdiction shall be our registered office insofar as you are not a
            consumer but a merchant, a legal entity under public law or a
            special fund under public law. The same shall apply if you do not
            have a general place of jurisdiction in Germany or the EU or if your
            place of residence or habitual abode is unknown at the time the
            action is brought. This shall not affect the right to bring an
            action before the court at another statutory place of jurisdiction.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            (3) The provisions of the UN Convention on Contracts for the
            International Sale of Goods shall expressly not apply.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography className="font-bold">
            II. Customer Information
          </Typography>
        </div>

        <div className="mt-5">
          <Typography className="font-bold">
            1. Identity of the Seller
          </Typography>
        </div>

        <ul className="mt-5">
          <li>Heimplanet Entwicklungs GmbH</li>
          <li>Shanghaiallee 21</li>
          <li>20457 Hamburg</li>
          <li>Germany</li>
          <li>Phone: 040 9999955 00</li>
          <li>E-mail: info@heimplanet.com</li>
        </ul>

        <div className="mt-5">
          <Typography>Alternative Dispute Resolution:</Typography>
          <Typography>
            The European Commission provides a platform for out-of-court online
            dispute resolution (ODR platform), available at
            https://ec.europa.eu/odr (https://ec.europa.eu/odr).
          </Typography>
        </div>

        <div className="mt-10">
          <Typography>
            We are not willing and not obliged to participate in dispute
            resolution proceedings before consumer arbitration boards.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography className="font-bold">
            2 Information on the conclusion of the contract
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            The technical steps for the conclusion of the contract, the
            conclusion of the contract itself and the correction options are
            carried out in accordance with the regulations "Conclusion of the
            contract" of our General Terms and Conditions (Part I.).
          </Typography>
        </div>

        <div className="mt-5">
          <Typography className="font-bold">
            3.Contract language, contract text storage
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>3.1. Contract language is German.</Typography>
        </div>

        <div className="mt-5">
          <Typography>
            3.2. The complete contract text is not stored by us. Before sending
            the order via the online shopping cart system, the contract data can
            be printed out or electronically saved using the browser's print
            function. After receipt of the order by us, the order data, the
            legally required information for distance contracts and the terms
            and conditions will be sent to you again by e-mail.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography className="font-bold">
            4. Key features of the goods or services
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            The key features of the goods and / or services can be found in the
            respective offer.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography className="font-bold">5. Prices and payment</Typography>
        </div>

        <div className="mt-5">
          <Typography>
            5.1. The prices listed in the respective offers and the shipping
            costs represent total prices. They include all price components
            including all applicable taxes.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            5.2. The applicable shipping costs are not included in the purchase
            price. They can be called up via a correspondingly designated button
            on our website or in the respective offer, are shown separately in
            the course of the ordering process and are to be borne by you in
            addition, unless free delivery has been promised.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            5.3 If delivery is made to countries outside the European Union,
            further costs may be incurred for which we are not responsible, such
            as customs duties, taxes or money transfer fees (transfer or
            exchange rate fees of credit institutions), which are to be borne by
            you.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            5.4 Any costs incurred for the transfer of funds (transfer or
            exchange rate fees of the credit institutions) shall be borne by you
            in cases where the delivery is made to an EU member state but the
            payment was initiated outside the European Union.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            5.5 The payment methods available to you are shown under a
            correspondingly designated button on our website or in the
            respective offer.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            5.6 Unless otherwise stated for the individual payment methods, the
            payment claims arising from the concluded contract shall be due for
            payment immediately.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography className="font-bold">6.Terms of delivery</Typography>
        </div>

        <div className="mt-5">
          <Typography>
            6.1 The terms of delivery, the delivery date and any existing
            delivery restrictions can be found under a correspondingly
            designated button on our website or in the respective offer.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            6.2 If you are a consumer, it is regulated by law that the risk of
            accidental loss and accidental deterioration of the sold item during
            shipment only passes to you upon delivery of the goods, regardless
            of whether the shipment is insured or uninsured. This does not apply
            if you have independently commissioned a transport company not named
            by the entrepreneur or any other person designated to carry out the
            shipment.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography className="font-bold">
            7. contractual agreements on the return costs in the event of
            revocation
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            7.1 The Seller guarantees full refund provided that all items have
            been returned in the condition in which they were upon receipt. This
            means that the items must not be damaged, soiled, washed, altered or
            worn (except for fitting). In addition, all tags and labels must be
            intact.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            7.2 If the goods are still returned, the Seller will send the goods
            back to the Customer and charge for this shipment. In this case, the
            purchase amount will not be refunded.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            7.3 We do not bear any costs for returns or returned goods. For
            returns or returns from within the country or abroad, the customer
            has to bear the return shipping costs himself.
          </Typography>
        </div>

        <div className="mt-5">
          <Typography className="font-bold">
            ‍8 Statutory warranty law
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>Legal liability for defects</Typography>
        </div>

        <div className="mt-5">
          <Typography>
            Liability for defects is governed by the "Warranty" provision in our
            General Terms and Conditions (Part I).
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>
            These General Terms and Conditions and customer information have
            been prepared by Händlerbund lawyers specializing in IT law and are
            constantly checked for legal compliance. Händlerbund Management AG
            guarantees the legal security of the texts and is liable in the
            event of warnings. For more information, please visit:
            https://www.haendlerbund.de/de/leistungen/rechtssicherheit/agb-service
            (https://www.haendlerbund.de/de/leistungen/rechtssicherheit/agb-service).
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>last update: 25.08.2023</Typography>
        </div>
      </div>
    </div>
  );
};

export default FootherAgbPage;
