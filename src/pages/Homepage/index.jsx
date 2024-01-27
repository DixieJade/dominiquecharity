import React from "react";
import Navbar from "../../components/Navbar";
import Payment from "../../components/Payment";

const index = () => {
  return (
    <div className="py-4">
      <section className="bg-heroBg bg-cover bg-no-repeat">
        <Navbar />
        <div className="mt-20 flex justify-end pr-8 overflow-y-visible">
          <Payment />
        </div>
      </section>
      <section className="bg-[#000080] text-white py-4">
        <div className="px-24">
          <div className="flex flex-col gap-2">
            <div>
              <h2>Causes</h2>
              <p>
                The establishment of this charity donation site is driven by
                various factors and motivations of common causes for creating
                this charity.
              </p>
            </div>
            <div className="grid grid-cols-2">
              {/*Goals of the website starts*/}
              <div>
                <h2>Social Impact</h2>
                <p>
                  Individuals or organizations may want to make a positive
                  impact on society by addressing specific social issues such as
                  poverty, education, healthcare, or disaster relief.
                </p>
              </div>
              <div>
                <h2>Transparency and Accountability</h2>
                <p>
                  To address concerns about transparency in traditional charity
                  models.
                </p>
              </div>
              <div>
                <h2>Community Building</h2>
                <p>
                  Fostering a sense of community, bringing together like-minded
                  individuals who want to contribute to a shared cause.
                </p>
              </div>
              <div>
                <h2>Educational Initiatives</h2>
                <p>
                  Aimed at supporting education and learning, providing
                  scholarships, funding schools, or enhancing educational
                  resources
                </p>
              </div>
              <div>
                <h2>Crisis Situations</h2>
                <p>
                  Responding to specific crises, such as pandemics, wars, or
                  economic downturns, prompted the creation of this charity to
                  address urgent needs.
                </p>
              </div>
              {/*Goals of the website ends*/}
              <p>
                Combining these factors can contribute to the establishment of a
                charity donation site, providing a platform for individuals and
                organizations to contribute to positive societal change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
