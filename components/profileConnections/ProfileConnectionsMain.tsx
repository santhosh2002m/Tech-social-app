import Connections from "../common/Connections";
import Contact from "../common/Contact";

const ProfileConnectionsMain = () => {
  return (
    <>
      {/* Connections */}
      <Connections clss="col-xxl-9 col-xl-8" />

      <div className="col-xxl-3 col-xl-4 col-lg-8 mt-5 mt-xl-0">
        <div className="cus-scrollbar">
          <div className="sidebar-wrapper d-flex al-item justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column flex gap-6">
            <div className="sidebar-area p-5">
              {/* Contact */}
              <Contact sectionType="followings">
                <div className="mb-4">
                  <h6 className="d-inline-flex">Contact</h6>
                </div>
              </Contact>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileConnectionsMain;
