import CustomSelect from "../select/commonSelect";
import { InputType, Module, Status } from "../../core/data/json/selectOption";
import { Link } from "react-router-dom";

const CustomFieldsModal = () => {
  return (
    <>
      <div className="modal fade" id="new-field">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Custom Field</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-12 dropdown">
                    <div className="mb-3">
                      <label className="form-label">Module</label>
                      <CustomSelect
                        options={Module}
                        modal={true}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Label</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Default Value</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-12 dropdown">
                    <div className="mb-3">
                      <label className="form-label">Input Type</label>
                      <CustomSelect
                        options={InputType}
                        modal={true}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex mb-3">
                      <label className="form-label me-3">Required</label>
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="required"
                          id="required1"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="required1">
                          Yes
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          name="required"
                          type="radio"
                          id="required2"
                        />
                        <label className="form-check-label" htmlFor="required2">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 dropdown">
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <CustomSelect
                        modal={true}
                        options={Status}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-6">
                    <Link
                      to="#"
                      className="btn btn-outline-primary w-100"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Cancel
                    </Link>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-primary w-100"
                      data-bs-dismiss="modal"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomFieldsModal;
