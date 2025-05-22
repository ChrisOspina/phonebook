import style from "./style";
function InformationTable(props){
  const sortedContacts = props.users.sort((a, b) => a.userLastname.localeCompare(b.userLastname));

  const display =
    sortedContacts.length > 0 ? (
      sortedContacts.map((user, index) => (
        <tr key={index}>
          <td style={style.tableCell}>{user.userFirstname}</td>
          <td style={style.tableCell}>{user.userLastname}</td>
          <td style={style.tableCell}>{user.userPhone}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>&nbsp;</td>
      </tr>
    );

    return(
        <table style={style.table} className="InformationTable">
            <thead>
                <tr>
                    <th style={style.tableCell}>First Name</th>
                    <th style={style.tableCell}>Last Name</th>
                    <th style={style.tableCell}>Phone</th>
                </tr>
            </thead>
            <tbody>{display}</tbody>
        </table>
    );
}
export default InformationTable