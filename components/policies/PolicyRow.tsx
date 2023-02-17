interface PolicyRowProps {
  title: string;
  content: string[];
}

const PolicyRow = ({ title, content }: PolicyRowProps) => {
  return (
    <tr>
      <td />
      <td>
        <em>
          <br />
          {title}
        </em>
      </td>
      <td width={'2%'} />
      <td>
        <br />
        {content.map((c) => (
          <>
          <span dangerouslySetInnerHTML={{__html: c}} />
            <br />
            <br />
          </>
        ))}
      </td>
      <td width={8} />
    </tr>
  );
};

export default PolicyRow;
