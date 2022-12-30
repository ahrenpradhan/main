import { CountDown, Divider } from '../../components/common';
import status from '../../constants/status';

// section 3 - current status

const Present = () => (
  <section
    className="container m-auto flex min-h-screen flex-col flex-col justify-center p-4 pb-32"
    id="present"
  >
    <div>
      <Divider />
      <div className="min-w-full pb-8 text-center text-3xl font-bold tracking-wide">
        At present
      </div>
      <div className="md:flex md:justify-around ">
        {status?.notice_period_expiration ? (
          <div className="self-center pb-6 text-center">
            <span className="italic">
              &quot;Serving notice period and open to offers...&quot;
            </span>
            <br />
            <br />
            <CountDown targetTime={status?.notice_period_expiration} />
          </div>
        ) : (
          false
        )}
        <div>
          {status?.current_company ? (
            <div className="pb-6 text-center">
              <div>Currently in</div>
              <div className="font-bold">{status?.current_company}</div>
            </div>
          ) : (
            false
          )}
          {status?.outsourced_to_company ? (
            <div className="pb-6 text-center">
              <div>Outsourced to</div>
              <div className="font-bold">{status?.outsourced_to_company}</div>
            </div>
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  </section>
);

export default Present;
