

import React from 'react';

function Workers() {
    return (
      <>
                <h2 className="site__title">Nasi specjaliści</h2>
                <article className="workers">
                    <div className="site__workersPhoto worker1"></div>
                    <div className="site__workerCaption">
                        <h3 className="site__workerName">Alex Hybner [Marketing & PR]</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, cum? Ad, repellat?
                            Repellat culpa sed fugiat sit amet deserunt magni?Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Quos facilis eius hic neque repudiandae! Impedit minima qui
                            cum at veniam mollitia harum modi. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Laborum nulla magnam veritatis?</p>
                    </div>
                </article>
                <article className="workers">
                    <div className="site__workersPhoto worker2"></div>
                    <div className="site__workerCaption site__workerCaption--onRight">
                        <h3 className="site__workerName">Anna Gawronyk [Marketing & PR]</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, cum? Ad, repellat?
                            Repellat culpa sed fugiat sit amet deserunt magni?Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Quos facilis eius hic neque repudiandae! Impedit minima qui
                            cum at veniam mollitia harum modi. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Laborum nulla magnam veritatis?</p>
                    </div>
                </article>
      </>
    );
}

export default Workers;

