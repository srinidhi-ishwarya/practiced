

import Card from "./CardRecords";
import SocialCard from "./SocialCard";


const FinalCards = () => {
  return (
    <div className="main-container">
      <Card title="Notes" buttonLabel="Recent Last">
        <input type="text" placeholder="Add a note" className="note-input" />
      </Card>

      <Card title="Attachments" buttonLabel="Attach">
        <p>No Attachments</p>
      </Card>

      <Card title="Open Activities" buttonLabel="Add New">
        <p>No records found</p>
      </Card>

      <Card title="Closed Activities">
        <p>No records found</p>
      </Card>

      <Card title="Invited Meetings">
        <p>No records found</p>
      </Card>

      <Card title="Emails" buttonLabel="ComposeEmail">
        <div className="email-tabs">
          <span className="link">Mail</span>
          <span>Draft</span>
          <span>Scheduled</span>
        </div>
        <p>No records found</p>
      </Card>

      <Card title="Campaigns" buttonLabel="Add Campaigns">
        <p>No records found</p>
      </Card>

      <SocialCard />
    </div>
  );
};

export default FinalCards;
