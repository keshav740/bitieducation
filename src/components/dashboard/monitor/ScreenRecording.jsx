import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";

const ScreenRecording = () => {
  return (
    <div className="flex px-20 justify-between items-center  shadow-lg border-t border-red-400">
      <div className="">
        <div className="flex items-center space-x-4">
          <BiUpArrowAlt className="bg-pink-400 text-5xl rounded-full p-2" />{" "}
          <p>Upgrade to Premium Subscription</p>
        </div>
        <div className="pt-10">
          <h1 className="font-bold text-4xl">Counter Moonlighting with</h1>
          <h1 className="font-bold text-4xl pt-5">
            Continuous Screen Recordings
          </h1>
        </div>
        <div className="pt-10 w-160">
          <p>
            It is Screen Recording Vs Screenshots. Time Champ takes the
            monitoring to the next level. Do not miss a single beat by recording
            continuous recording of the screen. It is an invaluable tool to
            counter the moon lighting in the modern workplace.
          </p>
        </div>
        <div className="pt-10 w-160">
          <p>
          If you really want this feature. Please <strong>contact</strong> your <strong>super admin</strong> to upgrade to it.
          </p>
        </div>
      </div>

      <div className="pb-10">
        <img src="/sub.png" alt="Screen Recording" srcset="" width={500} />
      </div>
    </div>
  );
};

export default ScreenRecording;
