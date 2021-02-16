function* rootSaga () {
    // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]

    // yield [ fork(),   // fork(saga2), ];
}


export default rootSaga;