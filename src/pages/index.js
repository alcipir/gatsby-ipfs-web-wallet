import React from "react"
import { connect } from "react-redux"

let AdminLTE =
  typeof window !== `undefined` ? require("../components/admin-lte").default : null
// Maps the props that are going to be sended
// to the component connected with Redux
const mapStateToProps = ({ walletInfo, bchBalance, bchWallet }) => {
  return { walletInfo, bchBalance, bchWallet }
}

// Send each action of the reducer as props
// to the component connected with Redux
const mapDispatchToProps = dispatch => {
  return {
    setWalletInfo: value => dispatch({ type: `SET_WALLET_INFO`, value }),
    updateBalance: value => dispatch({ type: `UPDATE_BALANCE`, value }),
    setBchWallet: value => dispatch({ type: `SET_BCH_WALLET`, value }),
  }
}

// Component connected with redux
let ConnectedDashboard = AdminLTE
  ? connect(mapStateToProps, mapDispatchToProps)(AdminLTE)
  : null

const AdminLTEPage = props => (
  <>
    {ConnectedDashboard && (
      <ConnectedDashboard menuComponents={props.pageContext.menuComponents} />
    )}
  </>
)

export default AdminLTEPage
