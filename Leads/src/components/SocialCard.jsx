


const SocialCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <strong>Social</strong>
      </div>
      <div className="card-body social-body">
        <div className="social-left">
          <div className="social-item">
            <button className="social-icon x">X</button>
            <span>Associate Twitter</span>
          </div>
          <div className="social-item">
            <button className="social-icon facebook">f</button>
            <span>Associate Facebook</span>
          </div>
        </div>
        <div className="social-right">
          <div className="user-icon">👤</div>
          <p>
            You cannot search a profile in Facebook. This has to be associated
            from the Social Tab
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
