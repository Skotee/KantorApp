// import store from '../store/configStore';
// import { connect } from 'react-redux';

// class SocketService {
//     constructor() {
//         this.items = null;
//         this.ws = new WebSocket('ws://webtask.future-processing.com:8068/ws/currencies?format=json');
//         this.ws.onopen = (arg) => {
//             // connection opened
//             console.log("arg", arg);
//         };
//         this.ws.onmessage = (e) => {
//             console.log("onmessage", e.data);
//             // a message was received
//             const result = JSON.parse(e.data);
//             console.log(result);
//             this.getData=this.getData.bind(this);
//             // this.setState({
//             //     items: result.Items,
//             //     // averageprice: event.Items[0].AveragePrice,
//             //     // code: event.Items[0].Code,
//             //     // name: event.Items[0].Name,
//             //     // purchaseprice: event.Items[0].Purchaseprice,
//             //     // sellprice: event.Items[0].Sellprice,
//             //     // unit: event.Items[0].Unit,
//             //     // date: event.Date,
//             //     err: false,

//             // });
//             // return result;
//         }

//           this.data = this.ws.onmessage();
//           this.getData = this.getData.bind(this);

//         this.ws.onerror = (e) => {
//             // an error occurred
//             console.log("error", e.error);
//         }

//         this.ws.onclose = this.logout;
//         // this.ws.close();

//     }

//       getData()
//       {
//           return this.result;
//       }
// }

//     const mapStateToProps = state => {
//         return {
//             result: state
//         };
//     }

//     // const web = new SocketService();

//     const mapDispatchToProps = dispatch => {
//         return {
//             onIncrementCounter: () => dispatch({type: 'AKCJA'})
//         };
//     };

//     // export default connect(mapStateToProps, mapDispatchToProps)(SocketService);
//     export default new SocketService();



//     // logout(e) {
//     //     console.log("onclose", e.code, e.reason);
//     // }

//         // const {err} = this.state;
//         // if (err) {
//         //     return <div>Error: {err.message}</div>;
//         // }
//         // else {
//                 // item={this.state.item}


//             // (
//             //     <SocketService item={this.state.item} />
//             //         {items.map(item => (
//             //             <li key={item.name}>
//             //                 {item.AveragePrice} {item.Code} {item.Unit} {item.Date} {item.PurchasePrice} {item.SellPrice}
//             //             </li>
//             //         ))}
//             // );




//         //  state = {
//         //      items: '',
//         //      // averageprice: '',
//         //      // code: '',
//         //      // name: '',
//         //      // purchaseprice: '',
//         //      // sellprice: '',
//         //      // unit: '',
//         //      // date: '',
//         //      err: false,
//         //  };