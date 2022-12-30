import { useCountdown } from '../../hooks/common/index';

const CountDown = ({ targetTime }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetTime);
  if (days || hours || minutes || seconds)
    return (
      <div className="m-auto flex w-fit items-center gap-2 rounded border border-zinc-700 bg-zinc-100 font-medium shadow-lg">
        {days ? (
          <>
            <div className=" w-fit px-1 py-1 text-center">
              <div>{days}</div>
              <div className="uppercase">Days</div>
            </div>
            <div className="w-fit">:</div>
          </>
        ) : (
          false
        )}

        {hours ? (
          <>
            <div className="w-fit px-1 py-1 text-center">
              <div>{hours}</div>
              <div className="uppercase">Hours</div>
            </div>
            <div className="w-fit">:</div>
          </>
        ) : (
          false
        )}
        {minutes >= 0 ? (
          <>
            <div className="w-fit px-1 py-1 text-center">
              <div>{minutes}</div>
              <div className="uppercase">Minutes</div>
            </div>
            <div className="w-fit">:</div>
          </>
        ) : (
          false
        )}
        {seconds >= 0 ? (
          <div className="w-fit px-1 py-1 text-center">
            <div>{seconds}</div>
            <div className="uppercase">Seconds</div>
          </div>
        ) : (
          false
        )}
      </div>
    );
  return <div />;
};

export default CountDown;
