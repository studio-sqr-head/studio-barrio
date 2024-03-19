const name = "Camilla van Wijk";
const email = "camillavanwijk@gmail.com";
const phone = "+31612345678";
const kvk = "12345678";

export const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between sm:flex-row flex-col">
        <div className="flex flex-col mb-4 sm:mb-0">
          <h3 className="text-2xl font-bold">Studio Camilla</h3>
          <h5 className="text-md font-light font-weight-light">
            Freelance UX design studio by Camilla van Wijk
          </h5>
        </div>

        <div
          className="flex text-sm sm:justify-end flex-wrap"
          style={{
            alignItems: "end",
          }}
        >
          {name}
          <span className="text-orange-500 mx-2">|</span>
          <a className="underline" href={`mailto:${email}`}>
            {email}
          </a>
          <span className="text-orange-500 mx-2">|</span>
          {phone}
          <span className="text-orange-500 mx-2">|</span>
          KVK {kvk}
        </div>
      </div>
    </footer>
  );
};
