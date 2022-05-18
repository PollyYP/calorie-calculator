import { Card } from "antd";
import "./resultCard.styles.css";

function ResultCard({ user }) {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title={user.nickname} bordered={false} style={{ width: 600 }}>
        <div>
          <h4>Infomation:</h4>
          <p>{user.info}</p>
        </div>
        <div>
          <h4>Result:</h4>
          <p>{user.result}</p>
        </div>
      </Card>
    </div>
  );
}

export default ResultCard;
