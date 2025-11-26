import Link from "next/link";

const FirstSectionComponents = ({ label, value, ValueComp }) => {
  return typeof value === "string" ? (
    <div className="flex flex-col gap-1">
      <span className="text-gray-500">{label}</span>
      <span>{value}</span>
    </div>
  ) : (
    <div className="flex flex-col gap-1">
      <span className="text-gray-500">{label}</span>
      <ValueComp />
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <div className="md:px-40 px-5">
        <div className="flex items-center gap-3 py-4 border-b border-gray-300">
          <span className="text-blue-800">Home</span>
          <span>/</span>
          <span>Place Order</span>
        </div>
        <div>
          <h3 className="md:block text-5xl hidden  mt-10 mb-5">
            Review & Confirm Order
          </h3>
          <h3 className="md:hidden block text-3xl mt-10 mb-5">
            Confirm & Review Order
          </h3>
          <div className="md:flex hidden items-center gap-5">
            <div
              width={0}
              height={0}
              className="w-[150px] h-[100px] border rounded-xl border-gray-200"
            ></div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500">Issuer name</span>
              <div className="flex gap-4 items-center">
                <span className="text-lg">KRAZYBEE SERVICES LIMITED</span>
                <div className="bg-red-500 rounded-lg px-6 py-1 text-[#fff] flex gap-2">
                  <i className="bi bi-star-fill" />
                  <span>AAA</span>
                </div>
                <button>
                  <i className="bi bi-trash-fill text-gray-400" />
                </button>
              </div>
              <Link href="/" className="text-lg">
                ISIN:{" "}
                <b className="text-blue-500">
                  INE342T07601 <i className="bi bi-box-arrow-up-right" />
                </b>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <div className="flex justify-between items-center">
              <div
                width={0}
                height={0}
                className="w-[120px] h-[80px] border rounded-xl border-gray-200"
              ></div>
              <div className="flex flex-col items-end gap-4">
                <div className="bg-red-500 rounded-lg px-6 py-1 text-[#fff] flex gap-2">
                  <i className="bi bi-star-fill" />
                  <span>AAA</span>
                </div>
                <button>
                  <i className="bi bi-trash-fill text-gray-400" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500">Issuer name</span>
              <span className="text-lg">KRAZYBEE SERVICES LIMITED</span>
              <Link href="/" className="text-lg">
                ISIN:{" "}
                <b className="text-blue-500">
                  INE342T07601 <i className="bi bi-box-arrow-up-right" />
                </b>
              </Link>
            </div>
          </div>
          <div className="p-6 border border-gray-300 w-full rounded-lg mt-5">
            <div className="w-full grid gap-10 md:grid-cols-4 grid-cols-2">
              <FirstSectionComponents
                label="Yield to Maturity"
                value="11.0000%"
              />
              <FirstSectionComponents label="Coupon Rate" value="10.7500%" />
              <FirstSectionComponents label="Face Value" value="₹1,00,000.00" />
              <FirstSectionComponents
                label="Maturity Date"
                value="25 Jan 2027"
              />
              <FirstSectionComponents label="Clean Price" value="₹98.8842" />
              <FirstSectionComponents
                label="Deal Date (Trade Date)"
                value="25 Nov 2025 (Wednesday)"
              />

              <FirstSectionComponents
                label="Settlement Date"
                ValueComp={() => (
                  <select className="p-2 border rounded">
                    <option>26 Nov 2025 (T + 1)</option>
                  </select>
                )}
              />
              <FirstSectionComponents
                label="Quantity Bonds"
                ValueComp={() => (
                  <div className="flex border border-gray-200 rounded-md">
                    <div className="p-2 px-3 bg-gray-300" dir="ltr">
                      <button className="rounded-s-lg">-</button>
                    </div>
                    <input
                      className="py-2 w-full text-center"
                      defaultValue={1}
                    />
                    <div className="p-2 px-3 text- bg-gray-300" dir="rtl">
                      <button className="rounded-s-lg">+</button>
                    </div>
                  </div>
                )}
              />
            </div>
            <div className="mt-5">
              <h3 className="font-bold text-lg">Demat Account Details</h3>
              <div className="w-full md:text-md text-sm whitespace-nowrap grid gap-10 md:grid-cols-4 grid-cols-2 mt-2">
                <div className="flex flex-col gap-1">
                  <div className="whitespace-nowrap flex gap-2 items-end text-gray-500">
                    DP ID{" "}
                    <div className="bg-green-500 rounded px-1">
                      <i className="bi bi-check text-sm text-[#fff]" />
                    </div>
                    <span className="md:block hidden">Verified</span>
                  </div>
                  <span>12081601</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-end text-gray-500">
                    Ben. / Client ID{" "}
                    <div className="bg-green-500 rounded px-1">
                      <i className="bi bi-check text-sm text-[#fff]" />
                    </div>
                    <span className="md:block hidden">Verified</span>
                  </div>
                  <span>87436525</span>
                </div>
                <FirstSectionComponents label="Depository" value="CDSL" />
                <FirstSectionComponents
                  label="Demat Account Type"
                  value="SOLE"
                />
              </div>
            </div>
            <div className="mt-5 mb-5">
              <h3 className="font-bold text-lg">Bank Account Details</h3>
              <div className="w-full md:text-md text-sm whitespace-nowrap grid gap-10 md:grid-cols-4 grid-cols-2 mt-2">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-end text-gray-500">
                    IFSC Code{" "}
                    <div className="bg-green-500 rounded px-1">
                      <i className="bi bi-check text-sm text-[#fff]" />
                    </div>
                    <span className="md:block hidden">Verified</span>
                  </div>
                  <span>ICIC0004081</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-end text-gray-500">
                    Account Number{" "}
                    <div className="bg-green-500 rounded px-1">
                      <i className="bi bi-check text-sm text-[#fff]" />
                    </div>
                    <span className="md:block hidden">Verified</span>
                  </div>
                  <span>000701632678</span>
                </div>
                <FirstSectionComponents
                  label="Bank Name"
                  value="ICIC BANK LIMITED"
                />
              </div>
            </div>
            <hr className="border border-gray-500" />
            <div className="mt-5">
              <div className="flex items-center md:gap-34 gap-5 md:text-xl text-sm">
                <div className="flex flex-col gap-1">
                  <span>Settlement Amount</span>
                  <span>
                    (Total Consideration + Stamp Duty + Other Charges)
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold">₹99,699.10</span>
                  <span>Amount Breakup</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-5">
              <input id="terms-conditions" type="checkbox" className="mt-1" />
              <label htmlFor="terms-conditions">
                I hereby to give MeraDhan permission to act as my broker and to
                send or respond to fixed (non-negotiable) quotes for this
                security on the RFQ platform (One to One Mode) of any stock
                exchange, and to take any steps needed to complete the
                transaction.
              </label>
            </div>
            <div className="mt-5">
              <button className="text-[#fff] bg-[#002C59] md:w-auto w-full px-4 py-2 rounded">
                Confirm & Continue <i className="bi bi-caret-right-fill" />
              </button>
            </div>
          </div>
          <div className="my-10">
            <p>Note:</p>
            <p className="text-sm mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              electronic typesetting, remaining essentially unchanged. It was
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
