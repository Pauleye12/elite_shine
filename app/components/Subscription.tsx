import { useState, useEffect } from "react";
import { DropdownIcon } from "./SVGs";
import emailjs from "emailjs-com";
import Loader from "./Loader";
import { usePopUp } from "~/Context/PopUpContext";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { format } from "date-fns";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
const bookingDetails = {
  name: "",
  email: "",
  phone: null as number | null,
  postcode: "",
  date: null,
  vehicle: {
    service: "",
    make_model: "",
    vehicleType: "",
    registration: "",
  },
  extras: [],
  otherInstructions: "",
  terms_conditions: false,
};

interface BookingDetails {
  name: string;
  email: string;
  phone: number | null;
  postcode: string;
  date: Date | null;
  // date: string;
  vehicle: vehicleObjType;
  extras: string[];
  otherInstructions: string;
  terms_conditions: boolean;
}

interface vehicleObjType {
  service: string;
  make_model: string;
  vehicleType: string;
  registration: string;
}

interface PersonalInfoProps {
  handleBookingDetails: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof BookingDetails
  ) => void;
  bookingState: BookingDetails;
  setBookingState: React.Dispatch<React.SetStateAction<BookingDetails>>;
}

interface VehicleInfoProps {
  handleVehicleDetails: (
    field: string,
    value?: string,
    e?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  vehicleDets: vehicleObjType;
  popUpMode: string;
}

interface OtherInfoProps {
  setBookingState: React.Dispatch<React.SetStateAction<BookingDetails>>;
  bookingState: BookingDetails;
  extras: string[];
}

export const PersonalInfo = ({
  handleBookingDetails,
  bookingState,
  setBookingState,
}: PersonalInfoProps) => {
  return (
    <form className="flex flex-col max-w-[500px] w-full gap-5 ">
      <input
        className="bg-[#FEF4F2] text-lg text-[#3D3D3D] px-5 py-2  md:px-8 md:py-4 outline-none border-none "
        placeholder="Name"
        onChange={(e) => handleBookingDetails(e, "name")}
        value={bookingState.name}
        type="text"
        name="name"
        id="name"
      />
      <input
        className="bg-[#FEF4F2] text-lg text-[#3D3D3D] px-5 py-2  md:px-8 md:py-4 outline-none border-none "
        placeholder="Email"
        onChange={(e) => handleBookingDetails(e, "email")}
        value={bookingState.email}
        type="email"
        name="email"
        id="email"
      />
      <input
        className="bg-[#FEF4F2] text-lg text-[#3D3D3D] px-5 py-2  md:px-8 md:py-4 outline-none border-none "
        placeholder="Phone number"
        onChange={(e) => handleBookingDetails(e, "phone")}
        value={bookingState.phone!}
        type="number"
        name="phoneNumber"
        id="phoneNumber"
      />
      <input
        className="bg-[#FEF4F2] text-lg text-[#3D3D3D] px-5 py-2  md:px-8 md:py-4 outline-none border-none "
        placeholder="Your postcode"
        onChange={(e) => handleBookingDetails(e, "postcode")}
        value={bookingState.postcode}
        type="text"
        name="postcode"
        id="postcode"
      />

      {/* <input
        className="bg-[#FEF4F2] text-lg text-[#3D3D3D] px-5 py-2  md:px-8 md:py-4 outline-none border-none "
        placeholder="Preferred date"
        onChange={(e) => handleBookingDetails(e, "date")}
        value={bookingState.date}
        type="date"
        name="date"
        id="date"
      /> */}

      {/* <DatePicker
        selected={bookingState.date}
        onChange={(date) =>
          setBookingState((prev) => ({
            ...prev,
            date: date,
          }))
        }
        className="bg-[#FEF4F2] text-lg text-[#3D3D3D] px-5! py-2!  md:px-8! md:py-4! outline-none w-full flex! items-center! border-none "
        placeholderText="Preferred Date and Time"
      /> */}

      <DateTimePicker
        onChange={(value) =>
          setBookingState((prev) => ({ ...prev, date: value }))
        }
        dayPlaceholder="DD"
        hourPlaceholder="hh"
        minutePlaceholder="mm"
        monthPlaceholder="MMM"
        yearPlaceholder="YYYY"
        secondPlaceholder="ss"
        value={bookingState.date}
        format="MM/dd/yyyy HH:mm"
        className="bg-[#FEF4F2] text-lg text-[#3D3D3D] px-5! py-2!  md:px-8! md:py-4! outline-none w-full flex! items-center! border-none!"
      />
    </form>
  );
};

export const VehicleInfo = ({
  handleVehicleDetails,
  vehicleDets,
  popUpMode,
}: VehicleInfoProps) => {
  const [showSubscriptionOptions, setShowSubscriptionOptions] = useState(false);
  const [showVehicleTypeOptions, setShowVehicleTypeOptions] = useState(false);
  return (
    <form className="flex flex-col max-w-[500px] w-full gap-5 ">
      <h1>Vehicle Info</h1>
      <div
        onClick={() => setShowSubscriptionOptions(!showSubscriptionOptions)}
        className="bg-[#FEF4F2] text-lg text-[#3D3D3D] px-5 py-2  md:px-8 md:py-4 outline-none relative z-40 flex justify-between  items-center border-none "
      >
        {vehicleDets.service
          ? vehicleDets.service
          : popUpMode === "booking"
          ? "Choose a Package"
          : "Choose  booking"}{" "}
        <DropdownIcon />
        {showSubscriptionOptions &&
          (popUpMode === "booking" ? (
            <div className="absolute bg-[#FEF4F2] px-5 py-2  md:px-8 md:py-4 md:-bottom-[280px] -bottom-[320px] border-b-5 border-[#EBEBEB] left-0 w-full flex flex-col gap-4 ">
              <button
                onClick={() => {
                  handleVehicleDetails("service", "Exterior Refresh (£25)"),
                    setShowSubscriptionOptions(!showSubscriptionOptions);
                }}
                className="w-full grid grid-cols-[1fr_auto_auto] justify-between gap-5 items-center text-left text-[#3D3D3D] md:text-lg "
              >
                <p className="w-full">Exterior Refresh</p>{" "}
                <span>---------</span> <p className="">£25</p>
              </button>
              <button
                onClick={() => {
                  handleVehicleDetails("service", "Interior Detail (£35)"),
                    setShowSubscriptionOptions(!showSubscriptionOptions);
                }}
                className="w-full grid grid-cols-[1fr_auto_auto] justify-between gap-5 items-center text-left text-[#3D3D3D] md:text-lg "
              >
                <p className="w-full">Interior Detail</p> <span>---------</span>{" "}
                <p className="w-full">£35</p>
              </button>
              <button
                onClick={() => {
                  handleVehicleDetails("service", "Mini Valet (£40)"),
                    setShowSubscriptionOptions(!showSubscriptionOptions);
                }}
                className="w-full grid grid-cols-[1fr_auto_auto] justify-between gap-5 items-center text-left text-[#3D3D3D] md:text-lg "
              >
                <p className="w-full">Mini Valet</p> <span>---------</span>{" "}
                <p className="w-full">£40</p>
              </button>
              <button
                onClick={() => {
                  handleVehicleDetails("service", "Full Valet (£60)"),
                    setShowSubscriptionOptions(!showSubscriptionOptions);
                }}
                className="w-full grid grid-cols-[1fr_auto_auto] justify-between gap-5 items-center text-left text-[#3D3D3D] md:text-lg "
              >
                <p className="w-full">Full Valet</p> <span>---------</span>{" "}
                <p className="w-full">£60</p>
              </button>
              <button
                onClick={() => {
                  handleVehicleDetails("service", "Full Detail Package (£100)"),
                    setShowSubscriptionOptions(!showSubscriptionOptions);
                }}
                className="w-full grid grid-cols-[1fr_auto_auto] justify-between gap-5 items-center text-left text-[#3D3D3D] md:text-lg "
              >
                <p className="  w-full ">Full Detail Package</p>{" "}
                <span className="text-center">---------</span>{" "}
                <p className="text-right">£100</p>
              </button>
            </div>
          ) : (
            <div className="absolute bg-[#FEF4F2] px-5 py-2  md:px-8 md:py-4 md:-bottom-[270%] -bottom-[320%] border-b-5 border-[#EBEBEB] left-0 w-full flex flex-col gap-4 ">
              <button
                onClick={() => {
                  handleVehicleDetails("service", "Basic Plan (£70/month)"),
                    setShowSubscriptionOptions(!showSubscriptionOptions);
                }}
                className="w-full grid grid-cols-[120px_auto_auto] justify-between gap-2 items-center text-left text-[#3D3D3D] md:text-lg "
              >
                <p>Basic Plan</p> <span>---------</span> <p>£70/M</p>
              </button>
              <button
                onClick={() => {
                  handleVehicleDetails("service", "Premium Plan (£120/month)"),
                    setShowSubscriptionOptions(!showSubscriptionOptions);
                }}
                className="w-full grid grid-cols-[120px_auto_auto] justify-between gap-2 items-center text-left text-[#3D3D3D] md:text-lg "
              >
                <p>Premium Plan</p> <span>---------</span> <p>£35/M</p>
              </button>
              <button
                onClick={() => {
                  handleVehicleDetails("service", "Find your fit (£0)"),
                    setShowSubscriptionOptions(!showSubscriptionOptions);
                }}
                className="w-full grid grid-cols-[120px_auto_auto] justify-between gap-2 items-center text-left text-[#3D3D3D] md:text-lg "
              >
                <p>Find your fit</p> <span>---------</span> <p>£0.0/M</p>
              </button>
            </div>
          ))}
      </div>
      <input
        className="bg-[#FEF4F2] text-lg text-[#3D3D3D] px-5 py-2  md:px-8 md:py-4 outline-none border-none "
        placeholder="Vehicle Make & Model"
        type="text"
        onChange={(e) => handleVehicleDetails("make_model", undefined, e)}
        value={vehicleDets.make_model}
        name="make_model"
        id="make_model"
      />
      <div
        onClick={() => setShowVehicleTypeOptions(!showVehicleTypeOptions)}
        className="bg-[#FEF4F2] text-lg text-[#3D3D3D] px-5 py-2  md:px-8 md:py-4 outline-none relative flex justify-between  items-center border-none "
      >
        {vehicleDets.vehicleType ? vehicleDets.vehicleType : "Vehicle Type"}{" "}
        <DropdownIcon />
        {showVehicleTypeOptions && (
          <div className="absolute bg-[#FEF4F2] px-5 py-2  md:px-8 md:py-4 md:-bottom-[250%] -bottom-[330%] border-b-5 z-40 border-[#EBEBEB] left-0 w-full flex flex-col gap-4 ">
            <button
              onClick={() => {
                handleVehicleDetails("vehicleType", "Car"),
                  setShowVehicleTypeOptions(!showVehicleTypeOptions);
              }}
              className="w-full text-left  text-[#3D3D3D] text-lg "
            >
              Car
            </button>
            <button
              onClick={() => {
                handleVehicleDetails("vehicleType", "SUV"),
                  setShowVehicleTypeOptions(!showVehicleTypeOptions);
              }}
              className="w-full text-left text-[#3D3D3D] text-lg "
            >
              SUV
            </button>
            <button
              onClick={() => {
                handleVehicleDetails("vehicleType", "Van"),
                  setShowVehicleTypeOptions(!showVehicleTypeOptions);
              }}
              className="w-full text-left text-[#3D3D3D] text-lg "
            >
              Van
            </button>
          </div>
        )}
      </div>
      <input
        className="bg-[#FEF4F2] text-lg text-[#3D3D3D] px-5 py-2  md:px-8 md:py-4 outline-none border-none "
        placeholder="Registration (Optional)"
        onChange={(e) => handleVehicleDetails("registration", undefined, e)}
        value={vehicleDets.registration}
        type="text"
        name="registration"
        id="registration"
      />
    </form>
  );
};

export const OtherInfo = ({
  setBookingState,
  bookingState,
  extras,
}: OtherInfoProps) => {
  const extraContent = [
    "Engine bay clean",
    "Pet hair removal",
    "Odour neutralizing treatment",
    "Upholstery Shampoo",
    "Paint sealant or Wax protection",
    "Ceramic coating",
  ];

  const handleCheckboxChange = (extra: string) => {
    setBookingState((prevState: BookingDetails) => {
      const isSelected: boolean = prevState.extras.includes(extra);
      const updatedExtras: string[] = isSelected
        ? prevState.extras.filter((item: string) => item !== extra)
        : [...prevState.extras, extra];

      return {
        ...prevState,
        extras: updatedExtras,
      } as BookingDetails;
    });
  };

  return (
    <form className="flex flex-col max-w-[500px] w-full gap-5 ">
      <h1 className="font-bold text-[24px] text-[#000000] ">Extras</h1>
      <div className="w-full grid-cols-2 grid justify-between items-center gap-x-3 md:gap-x-7 gap-y-4 ">
        {extraContent.map((extra, index) => (
          <label
            className="text-[#3D3D3D] text-lg flex items-center justify-stretch gap-1.5 "
            htmlFor={extra}
          >
            <input
              className="md:w-5 md:h-5 accent-[#C7361D]"
              key={index}
              value={extra}
              type="checkbox"
              name="extras"
              checked={extras.includes(extra)}
              onChange={() => handleCheckboxChange(extra)}
              id={extra}
            />
            {extra}
          </label>
        ))}
      </div>
      <textarea
        className="bg-[#FEF4F2] mt-3 text-lg text-[#3D3D3D] px-8 py-5 outline-none border-none "
        name="otherInstructions"
        id="otherInstructions"
        value={bookingState.otherInstructions}
        onChange={(e) =>
          setBookingState((prev) => ({
            ...prev,
            otherInstructions: e.target.value,
          }))
        }
        placeholder="Any Instruction for our team?"
      ></textarea>
      <label
        className="text-[#3D3D3D] text-lg flex items-center justify-stretch gap-1.5 "
        htmlFor="accept"
      >
        <input
          className="  w-5 h-5 accent-[#C7361D]  "
          type="checkbox"
          name="accept"
          checked={bookingState.terms_conditions}
          onChange={(e) =>
            setBookingState((prev) => ({
              ...prev,
              terms_conditions: e.target.checked,
            }))
          }
          id="accept"
        />
        <p>
          I agree to the <span className="underline">terms and conditions</span>
        </p>
      </label>
    </form>
  );
};

const Subscription = () => {
  const [bookingState, setBookingState] =
    useState<BookingDetails>(bookingDetails);
  const [screenNumber, setScreenNumber] = useState(1);
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setConfirmedModalOpen, popUpMode } = usePopUp();

  const handleNextPage = () => {
    if (screenNumber > 2) {
      return;
    }
    setScreenNumber((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (screenNumber <= 1) {
      return;
    }
    setScreenNumber((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setFormError("");

    try {
      const {
        name,
        email,
        phone,
        postcode,
        date,
        vehicle,
        extras,
        terms_conditions,
      } = bookingState;

      if (
        !name ||
        !email ||
        !phone ||
        !postcode ||
        !date ||
        !vehicle.service ||
        !vehicle.make_model ||
        !vehicle.vehicleType ||
        extras.length === 0 ||
        !terms_conditions
      ) {
        setFormError("Please fill out all required fields.");
        return;
      }

      console.log(bookingState);

      const formattedBooking = {
        name,
        email,
        phone: phone?.toString() || "",
        postcode,
        date: format(new Date(date), "dd-MMM-yyyy h:mm aa"),
        service: `${vehicle.service} ${
          popUpMode === "booking" ? "(BOOKING)" : "(SUBSCRIPTION)"
        } `,
        make_model: vehicle.make_model,
        vehicleType: vehicle.vehicleType,
        registration: vehicle.registration,
        extras: extras.join(", "),
        otherInstructions: bookingState.otherInstructions,
      };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formattedBooking,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setConfirmedModalOpen(true);
      setBookingState(bookingDetails);
    } catch (error) {
      setFormError("Email sending failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  interface HandleBookingDetailsEvent
    extends React.ChangeEvent<HTMLInputElement> {}

  const handleBookingDetails = (
    e: HandleBookingDetailsEvent,
    field: keyof BookingDetails
  ) => setBookingState((prev) => ({ ...prev, [field]: e.target.value }));

  const handleVehicleDetails = (
    field: string,
    value?: string,
    e?: HandleBookingDetailsEvent
  ) =>
    setBookingState((prev) => ({
      ...prev,
      vehicle: { ...prev.vehicle, [field]: value || e?.target.value },
    }));

  return (
    <div className="w-full flex flex-col gap-10 items-center  ">
      <div className="w-full flex justify-center items-center ">
        {screenNumber === 1 ? (
          <PersonalInfo
            handleBookingDetails={handleBookingDetails}
            bookingState={bookingState}
            setBookingState={setBookingState}
          />
        ) : screenNumber === 2 ? (
          <VehicleInfo
            handleVehicleDetails={handleVehicleDetails}
            vehicleDets={bookingState.vehicle}
            popUpMode={popUpMode}
          />
        ) : (
          <OtherInfo
            setBookingState={setBookingState}
            extras={bookingState.extras}
            bookingState={bookingState}
          />
        )}
      </div>
      <div className="w-full flex max-w-[500px] justify-between gap-4 items-center ">
        <button
          className="w-[120px] h-[50px] justify-center items-center flex text-white font-medium text-lg disabled:bg-[#888888] bg-[#C7361D] cursor-pointer disabled:cursor-not-allowed "
          onClick={handlePreviousPage}
          disabled={screenNumber <= 1}
        >
          Previous
        </button>
        {loading ? (
          <Loader />
        ) : (
          <button
            className="w-[120px] h-[50px] justify-center items-center flex text-white font-medium text-lg disabled:bg-[#888888] bg-[#C7361D] cursor-pointer disabled:cursor-not-allowed "
            //   disabled={screenNumber > 2}
            onClick={screenNumber === 3 ? handleSubmit : handleNextPage}
          >
            {screenNumber === 3 ? "Submit" : "Next"}
          </button>
        )}
      </div>
      {formError && (
        <p className="text-red-500 -mt-[25px] font-500 ">{formError}</p>
      )}
    </div>
  );
};

export default Subscription;
