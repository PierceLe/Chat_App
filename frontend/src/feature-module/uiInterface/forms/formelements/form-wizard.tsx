import React, { useRef } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";

const FormWizard = () => {
  const stepperRef = useRef<any>(null);
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="content-page-header">
            <h3>Form Wizard</h3>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Lightbox */}
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title mb-0">Basic Wizard</h4>
              </div>
              <div className="card-body">
                <Stepper ref={stepperRef}>
                  <StepperPanel header="Header I">
                    <div className="flex flex-column h-12rem">
                      <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                        <div className="mb-4">
                          <h5>Enter Your Personal Details</h5>
                        </div>
                        <form>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-firstname-input"
                                  className="form-label"
                                >
                                  First name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-firstname-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-lastname-input"
                                  className="form-label"
                                >
                                  Last name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-lastname-input"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-phoneno-input"
                                  className="form-label"
                                >
                                  Phone
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-phoneno-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-email-input"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="basicpill-email-input"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="flex pt-4 justify-content-end">
                      <button
                        className="btn btn-primary"
                        onClick={() => stepperRef.current.nextCallback()}
                      >
                        Next
                      </button>
                    </div>
                  </StepperPanel>
                  <StepperPanel header="Header II">
                    <div className="flex flex-column h-12rem">
                      <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                        <div className="mb-4">
                          <h5>Enter Your Address</h5>
                        </div>
                        <form>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-pancard-input"
                                  className="form-label"
                                >
                                  Address 1
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-pancard-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-vatno-input"
                                  className="form-label"
                                >
                                  Address 2
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-vatno-input"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-cstno-input"
                                  className="form-label"
                                >
                                  Landmark
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-cstno-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-servicetax-input"
                                  className="form-label"
                                >
                                  Town
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-servicetax-input"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="flex pt-4 justify-content-between">
                      <button
                        className="btn btn-black me-2"
                        onClick={() => stepperRef.current.prevCallback()}
                      >
                        Back
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => stepperRef.current.nextCallback()}
                      >
                        Next
                      </button>
                    </div>
                  </StepperPanel>
                  <StepperPanel header="Header III">
                    <div className="flex flex-column h-12rem">
                      <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                        <div className="mb-4">
                          <h5>Payment Details</h5>
                        </div>
                        <form>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-namecard-input"
                                  className="form-label"
                                >
                                  Name on Card
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-namecard-input"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-cardno-input"
                                  className="form-label"
                                >
                                  Credit Card Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-cardno-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-card-verification-input"
                                  className="form-label"
                                >
                                  Card Verification Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-card-verification-input"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-expiration-input"
                                  className="form-label"
                                >
                                  Expiration Date
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-expiration-input"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="flex pt-4 justify-content-start">
                      <button
                        className="btn btn-black"
                        onClick={() => stepperRef.current.prevCallback()}
                      >
                        Back
                      </button>
                    </div>
                  </StepperPanel>
                </Stepper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormWizard;
