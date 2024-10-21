function ServiceBlock({ text, faClass }) {
  return (
    <>
      <div className="p-3 service-card">
        <div className="card bg-light border-0 rounded-0">
          <div className="card-body p-4">
            <i
              className={`fa-solid ${faClass} fa-2x mb-2 bg-primary text-white rounded-circle align-content-center`}
            ></i>
            <h5 className="card-title text-primary fw-semibold py-2 my-0">
              {text}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceBlock;
