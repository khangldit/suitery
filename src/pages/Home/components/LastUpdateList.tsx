import React, { useEffect, useState } from 'react';

type PropType = {};
type Log = {
  time: string;
  title: string;
  description: string;
};
const LastUpdateList = (props: PropType) => {
  //   const {} = props;

  const [logs, setLogs] = useState<Log[]>([]);
  useEffect(() => {
    setLogs([
      {
        time: '17-9-2021',
        title:
          'South Korean Taxman to Be Granted Right to South Korean Taxman to Be Granted Right to',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
      {
        time: '17-9-2021',
        title:
          'South Korean Taxman to Be Granted Right to South Korean Taxman to Be Granted Right to South Korean Taxman to Be Granted Right to South Korean Taxman to Be Granted Right to',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
      {
        time: '17-9-2021',
        title:
          'South Korean Taxman to Be Granted Right to South Korean Taxman to Be Granted Right to',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
    ]);
  }, []);

  // #### functions

  // #### render
  return (
    <div className="last-update-list">
      <div className="fs-32 fw-bold">Get The Latest Suitery Updates</div>
      {logs.map((log) => {
        return (
          <div className="mt-4">
            <div className="fs-16 fw-bold color-yellow-4">{log.time}</div>
            <a href="/">
              <div className="title fs-20 fw-bold">{log.title}</div>
            </a>
            <div className="color-gray-13 fs-16 fw-300 description">
              {log.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default LastUpdateList;
