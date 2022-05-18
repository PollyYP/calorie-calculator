import { Card } from "antd";

function ResultCard({ userList }) {
  return (
    <div className="site-card-border-less-wrapper">
      {userList.map((user) => (
        <Card title={user.nickname} bordered={false} style={{ width: 300 }}>
          <p>{user.info}</p>
          <p>{user.result}</p>
        </Card>
      ))}
    </div>
  );
}

export default ResultCard;
