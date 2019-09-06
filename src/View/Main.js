import React, { Component } from 'react';
import ReactPageScroller from "react-page-scroller";
import { CSSTransition , TransitionGroup} from 'react-transition-group';
import { Animate } from 'react-move'
import { interpolate, interpolateTransformSvg } from 'd3-interpolate'
import { easeExpOut } from 'd3-ease'
import { log } from 'util';



const trackStyles = {
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'relative',
    margin: '5px 3px 10px',
    width: 250,
    height: 50,
}

export class Main extends Component {
    state={
        active:1,
        which:0,
        mouseX:0,
        mouseY:0,
        diffX:0,
        diffY:0
    }
    componentDidMount(){
       
        setTimeout(()=>{ this.setState({which:1})},200);
        this.setState({mouseX:window.screenX,mouseY:window.screenY});
    }
    
    goToPage = (pageNumber) => {
        this.reactPageScroller.goToPage(pageNumber);
    }
    cordinates=(e)=>{
       this.setState({diffX:e.screenX,diffY:e.screenY})
    }
    render() {
        var {which}=this.state;
        return (
            <div onMouseMove={(e)=>{this.cordinates(e)}}>
                <div className="navbar">
                    <img className="logo" src={require('../img/main_logo.png')} alt=""/>
                    <div className="menu">
                        <div onClick={()=>{this.setState({active:1})}} className={this.state.active===1 ? "menu-item-active":"menu-item"}>Услуги</div>
                        <div onClick={()=>{this.setState({active:2})}} className={this.state.active===2 ? "menu-item-active":"menu-item"}>Проекты</div>
                        <div onClick={()=>{this.setState({active:3})}} className={this.state.active===3 ? "menu-item-active":"menu-item"}>О нас</div>
                        <div onClick={()=>{this.setState({active:4})}} className={this.state.active===4 ? "menu-item-active":"menu-item"}>Контакты</div>
                    </div>
                </div>
                <ReactPageScroller ref={c => this.reactPageScroller = c} pageOnChange={(info)=>{setTimeout(()=>{ this.setState({which:info})},200);}}>
                    
                        
                    <Animate
                            start={() => ({
                            })}

                                update={() => ({
                                    x: this.state.diffX,
                                    y: this.state.diffY,   
                                    timing: { duration:10, ease: easeExpOut },
                                })}
                            >
                                    {(state) => {
                                        const { x,y } = state
                                        return (
                                    <div style={{backgroundPosition:`calc(5vw + ${x/50}px) ${y/50}px`}} id="elem1" className="page">
                                        <CSSTransition in={which===1} timeout={5500}  classNames="slogan1"  unmountOnExit><h2 id="slogan1" className="slogan">Define</h2></CSSTransition>
                                        <CSSTransition in={which===1} timeout={5500}  classNames="slogan2"  unmountOnExit><h2 id="slogan2" className="slogan">Your</h2></CSSTransition>
                                        <CSSTransition in={which===1} timeout={5500}  classNames="slogan3"  unmountOnExit><h2 id="slogan3" className="slogan">Target</h2></CSSTransition>
                                    </div>
                                )
                                }}
                            
                        </Animate>

                        <Animate
                          start={() => ({
                          })}

                            update={() => ({
                                x: this.state.diffX,
                                y: this.state.diffY,   
                                timing: { duration:10, ease: easeExpOut },
                            })}
                          >
                                {(state) => {
                                    const { x,y } = state

                                    return (
                                        <div  id="elem2" className="page">
                                        <CSSTransition in={which===2} timeout={5500}  classNames="page-title-animation"  unmountOnExit><p id="slogan1" className="page-title">Разработка различных <br/> сайтов</p></CSSTransition>
                                        <CSSTransition in={which===2} timeout={5500}  classNames="page-text-animation"  unmountOnExit><div className="page-text-wrap"><p className="page-text">Умеем создавать landing page, интернет магазины, корпоративные сайты и т.д. Кстати все делаем качественно</p></div></CSSTransition>
                                        <CSSTransition in={which===2} timeout={5500} classNames="images-animation" unmountOnExit>
                                            <div id="moving-1" className="moving-images">
                                                <img style={{right:`calc( 37vw + ${x/20}px)`,marginTop:`calc( 17vh + ${y/20}px)`}} id="pink-sms" src={require('../img/first/розовая смска.png')} alt=""/>
                                                <img style={{right:`calc( 43vw - ${x/40}px)`,marginTop:`calc( 31vh + ${y/40}px)`}} id="blue-cup" src={require('../img/first/синий кружочек.png')} alt=""/>
                                                <img style={{marginLeft:`calc( -10vw + ${x/20}px)`,marginTop:`calc( -30vh + ${y/20}px)`}}  id="blue-sms" src={require('../img/first/синяя смска.png')} alt=""/>
                                                <img style={{marginLeft:`${x/30}px`,marginTop:`${y/30}px`}} id="blue-arrow2" src={require('../img/first/синяя стрелочка 2.png')} alt=""/>
                                                <img style={{marginLeft:`calc( -32vw + ${x/30}px)`,marginTop:`calc( -30vh + ${y/30}px)`}}  id="blue-arrow" src={require('../img/first/синяя стрелочка.png')} alt=""/>
                                                <img style={{marginLeft:`calc( -22vw + ${x/30}px)`,marginTop:`calc( -35vh + ${y/30}px)`}}  id="x" src={require('../img/first/Х.png')} alt=""/>
                                            </div>
                                        </CSSTransition>
                                        </div>

                                    )
                                }}
                            
                        </Animate>

                        <Animate
                          start={() => ({
                          })}

                            update={() => ({
                                x: this.state.diffX,
                                y: this.state.diffY,   
                                timing: { duration:10, ease: easeExpOut },
                            })}
                          >
                                {(state) => {
                                    const { x,y } = state

                                    return (
                                        <div id="elem3" className="page">
                                            <CSSTransition in={which===3} timeout={5500}  classNames="page-text-animation"  unmountOnExit><p id="slogan1" className="page-title">Разработка десктопных <br/> приложений</p></CSSTransition>
                                            <CSSTransition in={which===3} timeout={5500}  classNames="page-title-animation"  unmountOnExit><div className="page-text-wrap"><p className="page-text">Умеем создавать landing page, интернет магазины, корпоративные сайты и т.д. Кстати все делаем качественно</p></div></CSSTransition>
                                            <CSSTransition in={which===3} timeout={5500} classNames="images-animation" unmountOnExit>
                                                <div id="moving-2" className="moving-images">
                                                    <img style={{right:`calc( 5vw + ${x/20}px)`,marginTop:`calc( 17vh + ${y/20}px)`}} id="css" src={require('../img/second/CSS.png')} alt=""/>
                                                    <img style={{right:`calc( 30vw - ${x/40}px)`,marginTop:`calc( -25vh + ${y/40}px)`}} id="php" src={require('../img/second/php.png')} alt=""/>
                                                    <img style={{marginLeft:`calc( -25vw + ${x/20}px)`,marginTop:`calc( -30vh + ${y/20}px)`}}  id="play" src={require('../img/second/кнопка плей.png')} alt=""/>
                                                    <img style={{marginLeft:`calc( -17vw + ${x/30}px)`,marginTop:`${y/30}px`}} id="code" src={require('../img/second/код.png')} alt=""/>
                                                    <img style={{marginLeft:`calc( -25vw + ${x/30}px)`,marginTop:`calc( -20vh + ${y/30}px)`}}  id="search" src={require('../img/second/поиск.png')} alt=""/>
                                                    <img style={{marginLeft:`calc( -30vw + ${x/30}px)`,marginTop:`calc( -35vh + ${y/30}px)`}}  id="c++" src={require('../img/second/с++.png')} alt=""/>
                                                    <img style={{marginLeft:`calc( -13vw + ${x/30}px)`,marginTop:`calc( -15vh + ${y/30}px)`}}  id="brakets" src={require('../img/second/скобки.png')} alt=""/>
                                                </div>
                                            </CSSTransition>
                                        </div>
                                )
                                }}
                            
                        </Animate>
                        <Animate
                          start={() => ({
                          })}

                            update={() => ({
                                x: this.state.diffX,
                                y: this.state.diffY,   
                                timing: { duration:10, ease: easeExpOut },
                            })}
                          >
                                {(state) => {
                                    const { x,y } = state

                                    return (
                                    <div id="elem4" className="page">
                                        <CSSTransition in={which===4} timeout={5500}  classNames="page-title-animation"  unmountOnExit><p id="slogan1" className="page-title">Разработка мобильных <br/> приложений</p></CSSTransition>
                                        <CSSTransition in={which===4} timeout={5500}  classNames="page-text-animation"  unmountOnExit><div className="page-text-wrap"><p className="page-text">Умеем создавать landing page, интернет магазины, корпоративные сайты и т.д. Кстати все делаем качественно</p></div></CSSTransition>
                                        <CSSTransition in={which===4} timeout={5500} classNames="images-animation" unmountOnExit>
                                                <div id="moving-3" className="moving-images">
                                                    <img style={{right:`calc( 37.5vw + ${x/40}px)`,marginTop:`calc( 25.5vh + ${y/40}px)`}} id="apple" src={require('../img/third/apple logo.png')} alt=""/>
                                                    <img style={{right:`calc( 38vw - ${x/40}px)`,marginTop:`calc( 47vh + ${y/40}px)`}} id="android" src={require('../img/third/Андроид.png')} alt=""/>
                                                    <img style={{marginLeft:`calc( -41.5vw + ${x/30}px)`,marginTop:`calc( 7vh + ${y/30}px)`}}  id="lamp" src={require('../img/third/Лампочка.png')} alt=""/>
                                                    <img style={{marginLeft:`calc( -67vw + ${x/30}px)`,marginTop:`calc( 47vh + ${y/40}px)`}} id="boltbig" src={require('../img/third/шестеренка большая.png')} alt=""/>
                                                    <img style={{marginLeft:`calc( -60vw + ${x/30}px)`,marginTop:`calc( 35vh + ${y/30}px)`}}  id="bolt" src={require('../img/third/шестеренка маленькая.png')} alt=""/>
                                                </div>
                                        </CSSTransition>
                                    </div>
                                )
                             }}
                                                            
                        </Animate>
                        <Animate
                          start={() => ({
                          })}

                            update={() => ({
                                x: this.state.diffX,
                                y: this.state.diffY,   
                                timing: { duration:10, ease: easeExpOut },
                            })}
                          >
                                {(state) => {
                                    const { x,y } = state

                                    return (
                                    <div id="elem5" className="page">
                                        <CSSTransition in={which===5} timeout={5500}  classNames="page-text-animation"  unmountOnExit><p id="slogan1" className="page-title">Разработка <br/> CRM систем</p></CSSTransition>
                                        <CSSTransition in={which===5} timeout={5500}  classNames="page-title-animation"  unmountOnExit><div className="page-text-wrap"><p className="page-text">Умеем создавать landing page, интернет магазины, корпоративные сайты и т.д. Кстати все делаем качественно</p></div></CSSTransition>
                                        <CSSTransition in={which===5} timeout={5500} classNames="images-animation" unmountOnExit>
                                                <div id="moving-3" className="moving-images">
                                                    <img style={{right:`calc( 5.5vw + ${x/40}px)`,marginTop:`calc( -38vh + ${y/40}px)`}} id="crm" src={require('../img/forth/CRM.png')} alt=""/>
                                                    <img style={{right:`calc( 5vw - ${x/40}px)`,marginTop:`calc( 7vh + ${y/40}px)`}} id="play" src={require('../img/forth/Кнопка плей.png')} alt=""/>
                                                    <img style={{marginLeft:`calc( -38.5vw + ${x/30}px)`,marginTop:`calc( -17vh + ${y/30}px)`}}  id="megafon" src={require('../img/forth/Мегафон.png')} alt=""/>
                                                    <img style={{marginLeft:`calc( -35vw + ${x/30}px)`,marginTop:`calc( -38vh + ${y/40}px)`}} id="statistica-1" src={require('../img/forth/статистика-1.png')} alt=""/>
                                                    <img style={{marginLeft:`calc( -30vw + ${x/30}px)`,marginTop:`calc( 15vh + ${y/30}px)`}}  id="statistica" src={require('../img/forth/Статистика.png')} alt=""/>
                                                </div>
                                        </CSSTransition>
                                    
                                    </div>
                        )
                        }}
                                                    
                        </Animate>
                </ReactPageScroller>  
            </div>
        )
    }
}

export default Main
