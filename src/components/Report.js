import { Component } from "react";

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: {},
    };
  }
  componentDidMount() {
    fetch(`${process.env.GRANT_BACKEND}/report`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("jwt"))}`,
      },
    })
      .then((r) => r.json())
      .then((res) => this.setState({ report: res }));
  }
  render() {
    return (
      <div id="Report" className="container overflowX-hidden position-relative">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" colSpan={2}>
                Report
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Users</th>
              <td>{this.state.report["Users"]}</td>
            </tr>
            <tr>
              <th scope="row">Institutes</th>
              <td>{this.state.report["Institutes"]}</td>
            </tr>
            <tr>
              <th scope="row">Pending-Donations</th>
              <td>{this.state.report["Pending-Donations"]}</td>
            </tr>
            <tr>
              <th scope="row">Completed-Donations</th>
              <td>{this.state.report["Completed-Donations"]}</td>
            </tr>
            <tr>
              <th scope="row">Reported-Donations</th>
              <td>{this.state.report["Reported-Donations"]}</td>
            </tr>
            <tr>
              <th scope="row">Deleted-Donations</th>
              <td>{this.state.report["Deleted-Donations"]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
