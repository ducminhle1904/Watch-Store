function Intro() {
  return (
    <div className="pb-20">
      <div className="center">
        <div className="flex flex-col items-center text-center">
          <div
            className="h-9 mb-6 w-[1px] animate-bounce"
            style={{ backgroundColor: "#beb7b1" }}
          ></div>
          <div
            className="font-neutratexttf mb-4 text-base"
            style={{ color: "#9c8265" }}
          >
            Explore
          </div>
          <div className="font-neutratext leading-5 text-4xl mb-4">
            LEAVE ORDINARY BEHIND
          </div>
          <p className="max-w-[500px] opacity-70 leading-7 tracking-wider">
            You don't believe in the commonplace, and neither do we. We strive
            for absolute greatness - and our watches are the living illustration
            of that ideology. Are you ready to make your mark?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
