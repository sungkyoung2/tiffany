let slide_num = 0;
        $(document).ready(function(){
            $(window).scroll(function(){
                sc=$(window).scrollTop();
                $('#sc').text(sc)
                if(sc>=1000 && sc<1700){
                    $('#con1_title').css({'right':(sc-1000)*1.5})
                }
                if(sc>=1300){
                    $('#content1 div>h3').animate({'marginTop':'140px','opacity':'1'},1000)
                    $('#content1 div>h4').animate({'marginTop':'40px','opacity':'1'},1500)
                }
                if(sc>=2000){
                    $('#content2 div>h3').animate({'marginTop':'120px','opacity':'1'},1000)
                    $('#content2 div>h4').animate({'marginTop':'40px','opacity':'1'},1500)
                }
                if(sc>=2400){
                    $('#content3_title>h2').animate({'marginTop':'0','opacity':'1'},1000)
                    $('#content3_title>p').animate({'marginTop':'-30px,1000','opacity':'1'},1500)
                }
                if(sc>=2500 && sc<3300){
                    $('#content3_box>li:nth-child(1)').css({'left':(sc*0.2)-662})
                    $('#content3_box>li:nth-child(2)').css({'top':(sc*0.4)-1320})
                    $('#content3_box>li:nth-child(3)').css({'bottom':(sc*0.2)-676})
                    $('#content3_box>li:nth-child(4)').css({'right':(sc*0.2)-660})
                }
                if(sc>=2600){
                    $('#content3_box').animate({'opacity':'1'})
                }
                if(sc>=3700){
                    $('#con4_title').animate({'opacity':'1'},800,function(){
                        $('#con4_bg_img>img').animate({'marginLeft':'0','opacity':'1'},800,function(){
                            $('#con4_1_text').animate({'opacity':'1'},function(){
                                $('#con4_1_right>ul>li:nth-child(1)').animate({'opacity':'1'},function(){
                                    $('#con4_1_right>ul>li:nth-child(2)').animate({'opacity':'1'},function(){
                                        $('#con4_1_right>ul>li:nth-child(3)').animate({'opacity':'1'})
                                    })
                                })
                            })
                        })
                    })
                    $('#con4_earring').animate({'top':'-60px'},2000)
                }
                if(sc>=3600 && sc<4250){
                    $('#con4_bg_img').css({'top':(sc-3500)*0.1})
                }
                if(sc>=4700){
                    $('#con4_2_top_left').animate({'marginLeft':'300px','opacity':'1'},1200)
                    $('#con4_buttom_left').delay(500).animate({'opacity':'1'},2000)
                    
                }
                if(sc>=4750 && sc<5050){
                    $('#dragonfly').css({'top':(sc-4750)-300})
                }
                if(sc>=6200){
                    $('#content5_title>h2').animate({'marginTop':'0','opacity':'1'},500,function(){
                        $('#content5_title>p').delay(500).animate({'marginTop':'-30px','opacity':'1'},function(){
                            $('#content5_box').fadeIn(500)
                        })
                    })
                }
                if(sc>=6100 && sc<6400){
                    $('#butterfly').css({'left':(sc-6300)+0.5,'width':(sc-6100)})
                }

                if(sc>=7000){
                    $('#content6_title>h2').animate({'opacity':'1','marginTop':'50px'},500,function(){
                        $('#content6_title>p').delay(500).animate({'opacity':'1','marginTop':'-30px'},function(){
                            $('#content6_box').fadeIn(500)
                        })
                    })
                }
                
            })

            $('header').delay(2000).animate({'height':'100px'})
                $('header').animate({'height':'60px'})
                $('#logo').delay(2000).animate({'lineHeight':'60px'})
                $('#logo>a>img').delay(3000).animate({'width':'160px'},2000)
                    $('#logo').delay(2000).animate({'width':'200px'},1000,function(){
                        $('#header_menu').delay(800).fadeIn()
                        $('#header_icon_box').delay(800).fadeIn()
                    })
            $('#video_line').delay(3000).animate({'height':'100px'},1000,function(){
                $('#box1_textbox>h2').animate({'marginTop':'30px','opacity':'1'},500,function(){
                    $('#box1_textbox>p').animate({'marginTop':'50px','opacity':'1'},500)
                })
            })
            
            $('#scroll_arrow').animate({'bottom':'-40px'},function(){
                $('#scroll_arrow').animate({'bottom':'-20px'})
            })
            setInterval(function(){
                $('#scroll_arrow').animate({'bottom':'-40px'},function(){
                $('#scroll_arrow').animate({'bottom':'-20px'})
                })
            },1000)

            $(function(){
            box1 = this.getElementById("box1");
            box2 = this.getElementById("box2");
            $(window).bind({resize: winResize, scroll: winScroll});
            });

            function winResize(){   
            box2.style.top = box1.offsetHeight + "px";
            }

            function winScroll(){
                op = 1 - (window.pageYOffset / box1.offsetHeight);
                box1.style.opacity = op;
            }
            $('#slide1_bt>li').click(function(){
                $(this).siblings().css({'backgroundColor':'#000','height':'6px'})
                $(this).css({'backgroundColor':'#64b9b2','height':'12px'})
            })



            const swiper = new Swiper('.swiper-container', {
                //기본 셋팅
                //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
                direction: 'horizontal',
                //한번에 보여지는 페이지 숫자
                slidesPerView:1.5,
                //페이지와 페이지 사이의 간격
                spaceBetween: 30,
                //드레그 기능 true 사용가능 false 사용불가
                debugger: true,
                //마우스 휠기능 true 사용가능 false 사용불가
                mousewheel: false,
                //반복 기능 true 사용가능 false 사용불가
                loop: true,
                //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
                centeredSlides: true,
                // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
                // effect: 'fade',
                
                
                //자동 스크를링
                autoplay: {
                    //시간 1000 이 1초
                    delay: 3000,
                    disableOnInteraction: false,
                },
                
                //페이징
                pagination: {
                    //페이지 기능
                    el: '.swiper-pagination',
                    //클릭 가능여부
                    clickable: false,
                },

                //방향표
                navigation: {
                    //다음페이지 설정
                    nextEl: '.swiper-button-next',
                    //이전페이지 설정
                    prevEl: '.swiper-button-prev',
                },
                
                });





            $('#content3_box>li').mousemove(function(){
                $(this).children('.content3_hover').stop().fadeIn(200)
            })
            $('#content3_box>li').mouseleave(function(){
                $(this).children('.content3_hover').stop().hide()
            })

            $('#content5_box>li').click(function(){
                $(this).animate({'width':'46%'})
                $(this).css({'cursor':'default'})
                $(this).children('.content5_clickbox').css({'display':'inline-block'})
                $(this).siblings().animate({'width':'18%'})
                $(this).siblings().css({'cursor':'pointer'})
                $(this).siblings().children('.content5_clickbox').css({'display':'none'})
            })

            setInterval(function(){
                $('.content5_clickbox>p>a>img').animate({'marginLeft':'10px'},function(){
                    $('.content5_clickbox>p>a>img').animate({'marginLeft':'0px'},200)
                })
            },400)
            setInterval(function(){
                $('.hover_bdbox>img').animate({'marginLeft':'260px'},function(){
                    $('.hover_bdbox>img').animate({'marginLeft':'240px'},500)
                })
            },1000)


            


        })