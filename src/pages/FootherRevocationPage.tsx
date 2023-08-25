import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Typography } from '@material-tailwind/react';
const FootherRevocationPage = () => {
  const heightNav = useSelector((state: RootState) => state.size.heightNav);
  return (
    <div style={{ paddingTop: `${heightNav}px` }}>
      <div className="px-[20%] py-[5%]">
        <Typography variant="h1">REVOCATION</Typography>

        <Typography className="mt-5">
          <Typography className="mt-5 font-bold">
            Right of withdrawal for consumers
          </Typography>
          <br />
          (Consumer is any natural person who enters into a legal transaction
          for purposes that are predominantly neither commercial nor their
          independent professional activity can be attributed.)
          <Typography className="mt-5 font-bold">
            Cancellation policy
          </Typography>
          <br />
          <Typography className="mt-5 font-bold">
            Right of withdrawal
          </Typography>
          <br />
          You have the right to cancel this contract within 14 days without
          giving any reason. The revocation period is 14 days from the day,
        </Typography>
        <ul>
          <li>
            on which you or a third party named by you, who is not the carrier,
            have taken or has taken possession of the goods, provided that you
            have ordered one or more goods as part of a uniform order and these
            are or will be delivered uniformly;
          </li>
          <li>
            on which you or a third party named by you, who is not the carrier,
            have taken possession of the last goods or has taken possession of
            the last goods, if you have ordered several goods in the context of
            a uniform order and these are delivered separately;
          </li>
          <li>
            on which you or a third party named by you, who is not the carrier,
            have taken possession of the last partial shipment or the last
            piece, if you have ordered goods that are delivered in several
            partial shipments or pieces;
          </li>
        </ul>
        <Typography className="mt-5">
          To exercise your right of withdrawal, you must contact us (Heimplanet
          Entwicklungs GmbH, Shanghaiallee 21, 20457 Hamburg, phone no.: 040
          999995500, e-mail address: info@heimplanet.com) by means of a clear
          declaration (e.g. a letter sent by post or an e-mail) of your decision
          to revoke this contract. You can use the attached sample withdrawal
          form for this purpose, which is, however, not mandatory.
        </Typography>
        <Typography className="mt-5">
          <span>You bear the direct costs of returning the goods. </span>
          <strong data-sanitized-data-mce-fragment="1">
            Please note that we do not bear any costs for returns.
          </strong>
          <br />
          To comply with the withdrawal period, it is sufficient that you send
          the notice of exercise of the right of withdrawal before the expiry of
          the withdrawal period.
          <Typography className="mt-5 font-bold">
            Consequences of rev
          </Typography>
          <br />
          ocationIf you revoke this contract, we shall reimburse you all
          payments we have received from you, including delivery costs (with the
          exception of additional costs resulting from the fact that you have
          chosen a type of delivery other than the cheapest standard delivery
          offered by us), without undue delay and at the latest within 14 days
          from the day on which we received the notification of your revocation
          of this contract. For this repayment, we will use the same means of
          payment that you used for the original transaction, unless expressly
          agreed otherwise with you; in no case will you be charged any fees
          because of this repayment.We may refuse repayment until we have
          received the goods back or until you have provided proof that you have
          returned the goods, whichever is the earlier.You must return or hand
          over the goods to us immediately and in any case no later than 14 days
          from the day on which you notify us of the cancellation of this
          contract. The deadline is met if you send the goods before the
          expiration of the period of 14 days.You bear the direct cost of
          returning the goods.You must pay for any loss in value of the goods
          only if this loss in value is due to a handling of the goods that is
          not necessary for the examination of the quality, characteristics and
          functioning of the goods.
          <Typography className="mt-5 font-bold">
            Reasons for exclusion or expiration
          </Typography>
          <Typography className="mt-5 font-bold">
            The right of withdrawal does not exist for contracts
          </Typography>
          <br />
        </Typography>
        <ul>
          <li>
            for the delivery of goods which are not prefabricated and for the
            production of which an individual selection or determination by the
            consumer is decisive or which are clearly tailored to the personal
            needs of the consumer;
          </li>
          <li>
            for the delivery of goods that can spoil quickly or whose expiration
            date would be quickly exceeded;
          </li>
          <li>
            for the delivery of alcoholic beverages, the price of which was
            agreed upon at the time of the conclusion of the contract, but which
            can be delivered at the earliest 30 days after the conclusion of the
            contract and the current value of which depends on fluctuations on
            the market over which the entrepreneur has no influence;
          </li>
          <li>
            for the delivery of newspapers, periodicals or magazines with the
            exception of subscription contracts.
          </li>
        </ul>
        <Typography className="mt-5">
          <Typography className="mt-5 font-bold">
            The right of withdrawal expires prematurely in the case of contracts
          </Typography>
          <br />
        </Typography>
        <ul>
          <li>
            for the delivery of sealed goods that are not suitable for return
            for reasons of health protection or hygiene, if their seal was
            removed after delivery;
          </li>
          <li>
            for the delivery of goods if these have been inseparably mixed with
            other goods after delivery due to their nature;
          </li>
          <li>
            for the delivery of sound or video recordings or computer software
            in a sealed package, if the seal has been removed after delivery.
          </li>
        </ul>
        <Typography className="mt-5">
          <Typography className="mt-5 font-bold">
            Sample cancellation form
          </Typography>
          <br />
          (If you want to cancel the contract, please fill out this form and
          send it back).
        </Typography>
        <ul>
          <li>
            To Heimplanet Entwicklungs GmbH, Shanghaiallee 21, 20457 Hamburg,
            e-mail address: info@heimplanet.com
          </li>
          <li>
            I/we (*) hereby cancel the contract concluded by me/us (*) for the
            purchase of the following goods (*)/
          </li>
          <li>the provision of the following service (*)</li>
          <li>Ordered on (*)/ received on (*)</li>
          <li>Name of the consumer(s)</li>
          <li>Address of the consumer(s)</li>
          <li>
            Signature of the consumer(s) (only in case of notification on paper)
          </li>
          <li>Date</li>
        </ul>
        <Typography className="mt-5">(*) Delete as applicable.</Typography>
      </div>
    </div>
  );
};

export default FootherRevocationPage;
