import PolicyRow from "./PolicyRow";

type ContentsProps = {
    title: {
        left: string
        right: string
    }
    contents: {
        title: string
        content: string[]
    }[]
}

interface PrivacyTableProps {
    table: ContentsProps
}

const PrivacyTable = ({table}: PrivacyTableProps) => {
  return (
    <table border={1} className="border">
      <tbody>
        <tr>
          <td>
            <table>
              <tbody>
                <tr>
                  <td width={8} />
                  <td colSpan={3}>
                    <br />
                    <u>{table.title.left}</u>
                    <br />
                    {table.title.right}
                  </td>
                  <td />
                </tr>
                {table.contents.map((row, index) => (
                  <PolicyRow key={index} title={row.title} content={row.content} />
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PrivacyTable;
