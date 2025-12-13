/**
 * @version 1.0.9478.41826
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*BadOpEffect start.*/
    Bridge.define("BadOpEffect", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            mCanvasGroup: null
        },
        methods: {
            /*BadOpEffect.OnEnable start.*/
            OnEnable: function () {
                this.mCanvasGroup.alpha = 0.0;
                LeanTween.value(0.0, 0.5, 0.3).setOnUpdate(Bridge.fn.bind(this, function (fValue) {
                    this.mCanvasGroup.alpha = fValue;
                })).setLoopPingPong$1(1).setOnComplete(Bridge.fn.bind(this, function () {
                    this.gameObject.SetActive(false);
                }));
            },
            /*BadOpEffect.OnEnable end.*/


        }
    });
    /*BadOpEffect end.*/

    /*BaoZhaEffect start.*/
    Bridge.define("BaoZhaEffect", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            mImage: null
        },
        methods: {
            /*BaoZhaEffect.SetImage start.*/
            SetImage: function (mMgr, Key) {
                var prefix = "majiang_pai_";
                this.mImage.sprite = mMgr.mResMgr.FindSprite(Key.substr(prefix.length));
            },
            /*BaoZhaEffect.SetImage end.*/


        }
    });
    /*BaoZhaEffect end.*/

    /*CommonResSerialization start.*/
    Bridge.define("CommonResSerialization", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            m_PrefabList: null,
            m_AtlasList: null,
            m_SpriteList: null,
            m_TextureList: null,
            m_AudoClipList: null,
            m_ShaderList: null,
            m_MaterialList: null,
            m_TextAssetList: null,
            mResFolder: null,
            mResSuffix: null
        },
        ctors: {
            init: function () {
                this.m_PrefabList = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                this.m_AtlasList = new (System.Collections.Generic.List$1(UnityEngine.U2D.SpriteAtlas)).ctor();
                this.m_SpriteList = new (System.Collections.Generic.List$1(UnityEngine.Sprite)).ctor();
                this.m_TextureList = new (System.Collections.Generic.List$1(UnityEngine.Texture)).ctor();
                this.m_AudoClipList = new (System.Collections.Generic.List$1(UnityEngine.AudioClip)).ctor();
                this.m_ShaderList = new (System.Collections.Generic.List$1(UnityEngine.Shader)).ctor();
                this.m_MaterialList = new (System.Collections.Generic.List$1(UnityEngine.Material)).ctor();
                this.m_TextAssetList = new (System.Collections.Generic.List$1(UnityEngine.TextAsset)).ctor();
                this.mResFolder = "";
                this.mResSuffix = "";
            }
        },
        methods: {
            /*CommonResSerialization.FindTextAsset start.*/
            FindTextAsset: function (name) {
                return this.m_TextAssetList.Find(function (x) {
                    return x != null && Bridge.referenceEquals(x.name, name);
                });
            },
            /*CommonResSerialization.FindTextAsset end.*/

            /*CommonResSerialization.FindPrefab start.*/
            FindPrefab: function (name) {
                return this.m_PrefabList.Find(function (x) {
                    return UnityEngine.GameObject.op_Inequality(x, null) && Bridge.referenceEquals(x.name, name);
                });
            },
            /*CommonResSerialization.FindPrefab end.*/

            /*CommonResSerialization.FindPrefabByPrefixName start.*/
            FindPrefabByPrefixName: function (name) {
                return this.m_PrefabList.Find(function (x) {
                    return UnityEngine.GameObject.op_Inequality(x, null) && System.String.startsWith(x.name, name);
                });
            },
            /*CommonResSerialization.FindPrefabByPrefixName end.*/

            /*CommonResSerialization.FindSprite start.*/
            FindSprite: function (name) {
                return this.m_SpriteList.Find(function (x) {
                    return x != null && Bridge.referenceEquals(x.name, name);
                });
            },
            /*CommonResSerialization.FindSprite end.*/

            /*CommonResSerialization.FindSpriteList start.*/
            FindSpriteList: function (prefix_name) {
                return this.m_SpriteList.FindAll(function (x) {
                    return x != null && System.String.startsWith(x.name, prefix_name);
                });
            },
            /*CommonResSerialization.FindSpriteList end.*/

            /*CommonResSerialization.FindTexture start.*/
            FindTexture: function (name) {
                return this.m_TextureList.Find(function (x) {
                    return x != null && Bridge.referenceEquals(x.name, name);
                });
            },
            /*CommonResSerialization.FindTexture end.*/

            /*CommonResSerialization.FindAudioClip start.*/
            FindAudioClip: function (name) {
                return this.m_AudoClipList.Find(function (x) {
                    return x != null && Bridge.referenceEquals(x.name, name);
                });
            },
            /*CommonResSerialization.FindAudioClip end.*/

            /*CommonResSerialization.FindShader start.*/
            FindShader: function (name) {
                return this.m_ShaderList.Find(function (x) {
                    return x != null && Bridge.referenceEquals(x.name, name);
                });
            },
            /*CommonResSerialization.FindShader end.*/

            /*CommonResSerialization.FindMaterial start.*/
            FindMaterial: function (name) {
                return this.m_MaterialList.Find(function (x) {
                    return x != null && Bridge.referenceEquals(x.name, name);
                });
            },
            /*CommonResSerialization.FindMaterial end.*/

            /*CommonResSerialization.GetAtlas start.*/
            GetAtlas: function (atlasName) {
                return this.m_AtlasList.Find(function (x) {
                    return x != null && Bridge.referenceEquals(x.name, atlasName);
                });
            },
            /*CommonResSerialization.GetAtlas end.*/

            /*CommonResSerialization.GetSpriteByAtlas start.*/
            GetSpriteByAtlas: function (atlasName, spriteName) {
                return this.GetAtlas(atlasName).GetSprite(spriteName);
            },
            /*CommonResSerialization.GetSpriteByAtlas end.*/


        }
    });
    /*CommonResSerialization end.*/

    /*SingleTonMonoBehaviour$1 start.*/
    Bridge.define("SingleTonMonoBehaviour$1", function (T) { return {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                m_Instance: Bridge.getDefaultValue(T)
            },
            props: {
                Instance: {
                    get: function () {
                        if (null == Bridge.rValue(SingleTonMonoBehaviour$1(T).m_Instance)) {
                            SingleTonMonoBehaviour$1(T).m_Instance = Bridge.rValue(UnityEngine.Object.FindObjectOfType(T));
                            if (Bridge.rValue(SingleTonMonoBehaviour$1(T).m_Instance) == null) {
                                var parent = UnityEngine.Object.FindObjectOfType(GameLauncher);
                                if (UnityEngine.MonoBehaviour.op_Inequality(parent, null)) {
                                    var obj = new UnityEngine.GameObject.ctor();
                                    obj.transform.SetParent(parent.transform);
                                    obj.name = Bridge.Reflection.getTypeName(T);
                                    SingleTonMonoBehaviour$1(T).m_Instance = Bridge.rValue(obj.AddComponent(T));
                                } else {
                                    var obj1 = new UnityEngine.GameObject.ctor();
                                    obj1.name = Bridge.Reflection.getTypeName(T);
                                    SingleTonMonoBehaviour$1(T).m_Instance = Bridge.rValue(obj1.AddComponent(T));
                                }
                            }

                        }
                        return Bridge.rValue(SingleTonMonoBehaviour$1(T).m_Instance);
                    }
                },
                readOnlyInstance: {
                    get: function () {
                        return Bridge.rValue(SingleTonMonoBehaviour$1(T).m_Instance);
                    }
                }
            },
            ctors: {
                init: function () {
                    this.m_Instance = Bridge.getDefaultValue(T);
                }
            }
        },
        methods: {
            /*SingleTonMonoBehaviour$1.Awake start.*/
            Awake: function () {
                if (Bridge.rValue(SingleTonMonoBehaviour$1(T).m_Instance) == null) {
                    SingleTonMonoBehaviour$1(T).m_Instance = Bridge.as(this, T);
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(Bridge.rValue(SingleTonMonoBehaviour$1(T).m_Instance), this)) {
                    UnityEngine.Debug.LogError$2("Error Use SingleTonMonoBehaviour: " + (this.gameObject.name || ""));
                }
            },
            /*SingleTonMonoBehaviour$1.Awake end.*/

            /*SingleTonMonoBehaviour$1.OnDestroy start.*/
            OnDestroy: function () {
                SingleTonMonoBehaviour$1(T).m_Instance = null;
            },
            /*SingleTonMonoBehaviour$1.OnDestroy end.*/


        }
    }; });
    /*SingleTonMonoBehaviour$1 end.*/

    /*DentedPixel.LeanDummy start.*/
    Bridge.define("DentedPixel.LeanDummy");
    /*DentedPixel.LeanDummy end.*/

    /*FixedTimer start.*/
    Bridge.define("FixedTimer", {
        statics: {
            methods: {
                /*FixedTimer.New:static start.*/
                New: function (func, duration, loop, unscaled) {
                    if (loop === void 0) { loop = 1; }
                    if (unscaled === void 0) { unscaled = false; }
                    var o = new FixedTimer();
                    o.func = func;
                    o.duration = duration;
                    o.time = duration;
                    o.loop = loop;
                    o.unscaled = unscaled;
                    o.running = false;
                    return o;
                },
                /*FixedTimer.New:static end.*/


            }
        },
        fields: {
            unscaled: false,
            loop: 0,
            duration: 0,
            time: 0,
            running: false,
            func: null
        },
        ctors: {
            init: function () {
                this.unscaled = false;
                this.loop = 0;
                this.duration = 0.0;
                this.time = 0.0;
                this.running = false;
            }
        },
        methods: {
            /*FixedTimer.Start start.*/
            Start: function () {
                this.running = true;
                SingleTonMonoBehaviour$1(TimeMgr).Instance.AddListener(Bridge.fn.cacheBind(this, this.Update));
            },
            /*FixedTimer.Start end.*/

            /*FixedTimer.Reset start.*/
            Reset: function (func, duration, loop, unscaled) {
                if (loop === void 0) { loop = 1; }
                if (unscaled === void 0) { unscaled = false; }
                this.duration = duration;
                this.loop = loop;
                this.unscaled = unscaled;
                this.func = func;
                this.time = duration;
            },
            /*FixedTimer.Reset end.*/

            /*FixedTimer.Stop start.*/
            Stop: function () {
                this.running = false;
                SingleTonMonoBehaviour$1(TimeMgr).Instance.RemoveListener(Bridge.fn.cacheBind(this, this.Update));
            },
            /*FixedTimer.Stop end.*/

            /*FixedTimer.Update start.*/
            Update: function () {
                if (!this.running) {
                    return;
                }

                var delta = this.unscaled ? UnityEngine.Time.unscaledDeltaTime : UnityEngine.Time.deltaTime;
                this.time = this.time - delta;

                while (this.time <= 0) {
                    this.time = this.time + this.duration;
                    this.func();
                    if (this.loop > 0) {
                        this.loop = (this.loop - 1) | 0;
                        if (this.loop === 0) {
                            this.Stop();
                            break;
                        }
                    }
                }
            },
            /*FixedTimer.Update end.*/


        }
    });
    /*FixedTimer end.*/

    /*FrameTimer start.*/
    Bridge.define("FrameTimer", {
        statics: {
            methods: {
                /*FrameTimer.New:static start.*/
                New: function (func, nFrameCount, loop) {
                    var o = new FrameTimer();
                    o.Init(func, nFrameCount, loop);
                    return o;
                },
                /*FrameTimer.New:static end.*/


            }
        },
        fields: {
            func: null,
            loop: 0,
            nNowFrame: 0,
            nSumFrame: 0,
            running: false
        },
        ctors: {
            init: function () {
                this.nNowFrame = 0;
                this.nSumFrame = 0;
                this.running = false;
            }
        },
        methods: {
            /*FrameTimer.Init start.*/
            Init: function (func, nFrameCount, loop) {
                if (loop === void 0) { loop = 1; }
                this.func = func;
                this.nSumFrame = nFrameCount;
                this.loop = loop;
                this.nNowFrame = nFrameCount;
                this.running = false;
            },
            /*FrameTimer.Init end.*/

            /*FrameTimer.Reset start.*/
            Reset: function (func, nFrameCount, loop) {
                this.func = func;
                this.nSumFrame = nFrameCount;
                this.loop = loop;
                this.nNowFrame = nFrameCount;
            },
            /*FrameTimer.Reset end.*/

            /*FrameTimer.Start start.*/
            Start: function () {
                SingleTonMonoBehaviour$1(TimeMgr).Instance.AddListener(Bridge.fn.cacheBind(this, this.Update));
                this.running = true;
            },
            /*FrameTimer.Start end.*/

            /*FrameTimer.Stop start.*/
            Stop: function () {
                this.running = false;
                SingleTonMonoBehaviour$1(TimeMgr).Instance.RemoveListener(Bridge.fn.cacheBind(this, this.Update));
            },
            /*FrameTimer.Stop end.*/

            /*FrameTimer.Update start.*/
            Update: function () {
                if (!this.running) {
                    return;
                }

                var deltaTime = UnityEngine.Time.time;
                this.nNowFrame = (this.nNowFrame - 1) | 0;
                if (this.nNowFrame <= 0) {
                    this.func();

                    if (this.loop > 0) {
                        this.loop = (this.loop - 1) | 0;
                    }

                    if (this.loop === 0) {
                        this.Stop();
                    } else {
                        this.nNowFrame = this.nSumFrame;
                    }
                }

            },
            /*FrameTimer.Update end.*/


        }
    });
    /*FrameTimer end.*/

    /*GameLauncher start.*/
    Bridge.define("GameLauncher", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*GameLauncher.Start start.*/
            Start: function () {

            },
            /*GameLauncher.Start end.*/

            /*GameLauncher.Update start.*/
            Update: function () {

            },
            /*GameLauncher.Update end.*/


        }
    });
    /*GameLauncher end.*/

    /*GameMgr start.*/
    Bridge.define("GameMgr", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                nMaxX: 0,
                nMaxY: 0
            },
            ctors: {
                init: function () {
                    this.nMaxX = 20;
                    this.nMaxY = 40;
                }
            }
        },
        fields: {
            mBaoZhaEffect: null,
            BadOpEffect: null,
            goClickOk: null,
            mLoadingView: null,
            mResMgr: null,
            mItemPrefab: null,
            ItemParent: null,
            cellSize: null,
            mSpriteList: null,
            mItemPool: null,
            mItemList: null,
            mSelectItemList: null,
            mBaoZhaEffectPool: null,
            nXiaoChuCount: 0
        },
        ctors: {
            init: function () {
                this.cellSize = new UnityEngine.Vector2();
                this.cellSize = new pc.Vec2( 128, 157 );
                this.mSpriteList = new (System.Collections.Generic.List$1(UnityEngine.Sprite)).ctor();
                this.mItemPool = new (System.Collections.Generic.List$1(Item)).ctor();
                this.mItemList = new (System.Collections.Generic.List$1(System.Collections.Generic.List$1(Item))).ctor();
                this.mSelectItemList = new (System.Collections.Generic.List$1(Item)).ctor();
                this.mBaoZhaEffectPool = new (NodeComponentPool$1(BaoZhaEffect))();
                this.nXiaoChuCount = 0;
            }
        },
        methods: {
            /*GameMgr.Start start.*/
            Start: function () {
                this.mBaoZhaEffect.gameObject.SetActive(false);
                this.BadOpEffect.gameObject.SetActive(false);
                this.mBaoZhaEffectPool.Init(this.mBaoZhaEffect.gameObject, 2);
                this.goClickOk.SetActive(false);
                this.mLoadingView.gameObject.SetActive(true);
                this.InitGame();
            },
            /*GameMgr.Start end.*/

            /*GameMgr.InitGame start.*/
            InitGame: function () {
                this.mSpriteList = this.mResMgr.FindSpriteList("majiang_pai_");

                for (var i = 0; i < GameMgr.nMaxX; i = (i + 1) | 0) {
                    var mItemList2 = new (System.Collections.Generic.List$1(Item)).ctor();
                    this.mItemList.add(mItemList2);
                    for (var j = 0; j < GameMgr.nMaxY; j = (j + 1) | 0) {
                        var mItem = this.PopItem();
                        var nRandomIndex = RandomTool.RandomArrayIndex(0, this.mSpriteList.Count);
                        mItem.Refresh(this, this.mSpriteList.getItem(nRandomIndex));
                        mItem.transform.localPosition = this.GetPos(i, j);
                        mItemList2.add(mItem);
                    }
                }

                var mPos = (this.GetPos(0, 0).add( this.GetPos(19, 39) )).scale( 1.0 / ( 2.0 ) );
                this.ItemParent.transform.localPosition = mPos.$clone().scale( -1 );
            },
            /*GameMgr.InitGame end.*/

            /*GameMgr.GetPos start.*/
            GetPos: function (nX, nY) {
                return new pc.Vec3( this.cellSize.$clone().x * nX, this.cellSize.$clone().y * nY, 0 );
            },
            /*GameMgr.GetPos end.*/

            /*GameMgr.OnClickCell start.*/
            OnClickCell: function (mSelect) {
                var $t, $t1, $t2;
                if (!this.mSelectItemList.contains(mSelect)) {
                    this.mSelectItemList.add(mSelect);
                }

                $t = Bridge.getEnumerator(this.mItemList);
                try {
                    while ($t.moveNext()) {
                        var v = $t.Current;
                        $t1 = Bridge.getEnumerator(v);
                        try {
                            while ($t1.moveNext()) {
                                var v2 = $t1.Current;
                                v2.OnSelect(this.mSelectItemList);
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                if (this.mSelectItemList.Count === 2) {
                    if (Bridge.referenceEquals(this.mSelectItemList.getItem(0).Key, this.mSelectItemList.getItem(1).Key)) {
                        this.nXiaoChuCount = (this.nXiaoChuCount + 1) | 0;
                        this.DoMove();
                    } else {
                        this.goClickOk.SetActive(false);
                        $t2 = Bridge.getEnumerator(this.mSelectItemList);
                        try {
                            while ($t2.moveNext()) {
                                var v1 = $t2.Current;
                                var mItem = { v : v1 };
                                LeanTween.delayedCall(0.5, (function ($me, mItem) {
                                    return Bridge.fn.bind($me, function () {
                                        mItem.v.mDiBan.sprite = this.mResMgr.FindSprite("pai_diban_error");
                                        LeanTween.alpha$1(mItem.v.gameObject, 0, 0.3).setOnComplete(Bridge.fn.bind(this, function () {
                                            mItem.v.mDiBan.sprite = this.mResMgr.FindSprite("pai_diban_white");
                                        }));

                                    });
                                })(this, mItem));
                            }
                        } finally {
                            if (Bridge.is($t2, System.IDisposable)) {
                                $t2.System$IDisposable$Dispose();
                            }
                        }

                        LeanTween.delayedCall(0.5, Bridge.fn.bind(this, function () {
                            this.BadOpEffect.SetActive(true);

                        }));
                    }

                    this.mSelectItemList.clear();
                }
            },
            /*GameMgr.OnClickCell end.*/

            /*GameMgr.DoMove start.*/
            DoMove: function () {
                var $t;
                var mNeedMoveList = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                for (var i = 0; i < GameMgr.nMaxX; i = (i + 1) | 0) {
                    var mItemList2 = this.mItemList.getItem(i);
                    for (var j = (mItemList2.Count - 1) | 0; j >= 0; j = (j - 1) | 0) {
                        var mItem = mItemList2.getItem(j);
                        if (this.mSelectItemList.contains(mItem)) {
                            mItemList2.remove(mItem);
                            this.RecycleItem(mItem);

                            if (!mNeedMoveList.contains(i)) {
                                mNeedMoveList.add(i);
                            }
                        }
                    }
                }

                this.goClickOk.SetActive(true);
                $t = Bridge.getEnumerator(this.mSelectItemList);
                try {
                    while ($t.moveNext()) {
                        var v = $t.Current;
                        var mItem1 = { v : v };
                        LeanTween.delayedCall(0.5, (function ($me, mItem1) {
                            return Bridge.fn.bind($me, function () {
                                var mEffect = this.mBaoZhaEffectPool.popObj();
                                mEffect.SetImage(this, mItem1.v.Key);
                                mEffect.transform.SetParent(this.transform, false);
                                mEffect.transform.position = mItem1.v.transform.position.$clone();
                                mEffect.gameObject.SetActive(true);

                                LeanTween.delayedCall(1.5, Bridge.fn.bind(this, function () {
                                    this.mBaoZhaEffectPool.recycleObj(mEffect);
                                }));
                            });
                        })(this, mItem1));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.mSelectItemList.clear();
                LeanTween.delayedCall(1.0, Bridge.fn.bind(this, function () {
                    var $t1;
                    $t1 = Bridge.getEnumerator(mNeedMoveList);
                    try {
                        while ($t1.moveNext()) {
                            var v1 = $t1.Current;
                            var i1 = v1;
                            var mItemList21 = this.mItemList.getItem(i1);
                            for (var j1 = 0; j1 < mItemList21.Count; j1 = (j1 + 1) | 0) {
                                var mItem2 = mItemList21.getItem(j1);
                                LeanTween.moveLocalY(mItem2.gameObject, this.GetPos(i1, j1).y, 0.5);
                            }
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }

                    if (this.nXiaoChuCount >= 15) {
                        //��ת���̵����
                        UnityEngine.Debug.Log$1("\ufffd\ufffd\u05ea");
                    }
                }));

            },
            /*GameMgr.DoMove end.*/

            /*GameMgr.PopItem start.*/
            PopItem: function () {
                var mItem = null;
                if (this.mItemPool.Count > 0) {
                    mItem = this.mItemPool.getItem(((this.mItemPool.Count - 1) | 0));
                } else {
                    var go = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.mItemPrefab.gameObject);
                    mItem = go.GetComponent(Item);
                    mItem.transform.SetParent(this.ItemParent, false);
                    mItem.transform.localScale = new pc.Vec3( 1, 1, 1 );
                }

                mItem.gameObject.SetActive(true);
                return mItem;
            },
            /*GameMgr.PopItem end.*/

            /*GameMgr.RecycleItem start.*/
            RecycleItem: function (mItem) {
                mItem.gameObject.SetActive(false);
                this.mItemPool.add(mItem);
            },
            /*GameMgr.RecycleItem end.*/


        }
    });
    /*GameMgr end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Item start.*/
    Bridge.define("Item", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            mDiBan: null,
            mImage: null,
            clickBtn: null,
            mMgr: null
        },
        props: {
            Key: {
                get: function () {
                    return this.mImage.sprite.name;
                }
            }
        },
        methods: {
            /*Item.Start start.*/
            Start: function () {
                this.clickBtn.onClick.AddListener(Bridge.fn.bind(this, function () {
                    this.mMgr.OnClickCell(this);
                }));
            },
            /*Item.Start end.*/

            /*Item.OnSelect start.*/
            OnSelect: function (mSelectItemList) {
                if (mSelectItemList.contains(this)) {
                    this.mDiBan.sprite = this.mMgr.mResMgr.FindSprite("pai_diban_select");
                } else {
                    this.mDiBan.sprite = this.mMgr.mResMgr.FindSprite("pai_diban_white");
                }
            },
            /*Item.OnSelect end.*/

            /*Item.Refresh start.*/
            Refresh: function (mMgr, Key) {
                this.mMgr = mMgr;
                this.mImage.sprite = Key;
            },
            /*Item.Refresh end.*/


        }
    });
    /*Item end.*/

    /*LeanProp start.*/
    Bridge.define("LeanProp", {
        $kind: 6,
        statics: {
            fields: {
                position: 0,
                localPosition: 1,
                x: 2,
                y: 3,
                z: 4,
                localX: 5,
                localY: 6,
                localZ: 7,
                scale: 8,
                color: 9
            }
        }
    });
    /*LeanProp end.*/

    /*LeanSmooth start.*/
    Bridge.define("LeanSmooth", {
        statics: {
            methods: {
                /*LeanSmooth.damp:static start.*/
                damp: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    if (deltaTime < 0.0) {
                        deltaTime = UnityEngine.Time.deltaTime;
                    }

                    smoothTime = UnityEngine.Mathf.Max(0.0001, smoothTime);
                    var num = 2.0 / smoothTime;
                    var num2 = num * deltaTime;
                    var num3 = 1.0 / (1.0 + num2 + 0.48 * num2 * num2 + 0.235 * num2 * num2 * num2);
                    var num4 = current - target;
                    var num5 = target;
                    if (maxSpeed > 0.0) {
                        var num6 = maxSpeed * smoothTime;
                        num4 = Math.max(-num6, Math.min(num4, num6));
                    }
                    target = current - num4;
                    var num7 = (currentVelocity.v + num * num4) * deltaTime;
                    currentVelocity.v = (currentVelocity.v - num * num7) * num3;
                    var num8 = target + (num4 + num7) * num3;
                    if (num5 - current > 0.0 === num8 > num5) {
                        num8 = num5;
                        currentVelocity.v = (num8 - num5) / deltaTime;
                    }
                    return num8;
                },
                /*LeanSmooth.damp:static end.*/

                /*LeanSmooth.damp$2:static start.*/
                damp$2: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    var x = LeanSmooth.damp(current.x, target.x, Bridge.ref(currentVelocity.v, "x"), smoothTime, maxSpeed, deltaTime);
                    var y = LeanSmooth.damp(current.y, target.y, Bridge.ref(currentVelocity.v, "y"), smoothTime, maxSpeed, deltaTime);
                    var z = LeanSmooth.damp(current.z, target.z, Bridge.ref(currentVelocity.v, "z"), smoothTime, maxSpeed, deltaTime);

                    return new pc.Vec3( x, y, z );
                },
                /*LeanSmooth.damp$2:static end.*/

                /*LeanSmooth.damp$1:static start.*/
                damp$1: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    var r = LeanSmooth.damp(current.r, target.r, Bridge.ref(currentVelocity.v, "r"), smoothTime, maxSpeed, deltaTime);
                    var g = LeanSmooth.damp(current.g, target.g, Bridge.ref(currentVelocity.v, "g"), smoothTime, maxSpeed, deltaTime);
                    var b = LeanSmooth.damp(current.b, target.b, Bridge.ref(currentVelocity.v, "b"), smoothTime, maxSpeed, deltaTime);
                    var a = LeanSmooth.damp(current.a, target.a, Bridge.ref(currentVelocity.v, "a"), smoothTime, maxSpeed, deltaTime);

                    return new pc.Color( r, g, b, a );
                },
                /*LeanSmooth.damp$1:static end.*/

                /*LeanSmooth.spring:static start.*/
                spring: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime, friction, accelRate) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    if (friction === void 0) { friction = 2.0; }
                    if (accelRate === void 0) { accelRate = 0.5; }
                    if (deltaTime < 0.0) {
                        deltaTime = UnityEngine.Time.deltaTime;
                    }

                    var diff = target - current;

                    currentVelocity.v += deltaTime / smoothTime * accelRate * diff;

                    currentVelocity.v *= (1.0 - deltaTime * friction);

                    if (maxSpeed > 0.0 && maxSpeed < Math.abs(currentVelocity.v)) {
                        currentVelocity.v = maxSpeed * (currentVelocity.v === 0 ? 1 : Math.sign(currentVelocity.v));
                    }

                    var returned = current + currentVelocity.v;

                    return returned;
                },
                /*LeanSmooth.spring:static end.*/

                /*LeanSmooth.spring$2:static start.*/
                spring$2: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime, friction, accelRate) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    if (friction === void 0) { friction = 2.0; }
                    if (accelRate === void 0) { accelRate = 0.5; }
                    var x = LeanSmooth.spring(current.x, target.x, Bridge.ref(currentVelocity.v, "x"), smoothTime, maxSpeed, deltaTime, friction, accelRate);
                    var y = LeanSmooth.spring(current.y, target.y, Bridge.ref(currentVelocity.v, "y"), smoothTime, maxSpeed, deltaTime, friction, accelRate);
                    var z = LeanSmooth.spring(current.z, target.z, Bridge.ref(currentVelocity.v, "z"), smoothTime, maxSpeed, deltaTime, friction, accelRate);

                    return new pc.Vec3( x, y, z );
                },
                /*LeanSmooth.spring$2:static end.*/

                /*LeanSmooth.spring$1:static start.*/
                spring$1: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime, friction, accelRate) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    if (friction === void 0) { friction = 2.0; }
                    if (accelRate === void 0) { accelRate = 0.5; }
                    var r = LeanSmooth.spring(current.r, target.r, Bridge.ref(currentVelocity.v, "r"), smoothTime, maxSpeed, deltaTime, friction, accelRate);
                    var g = LeanSmooth.spring(current.g, target.g, Bridge.ref(currentVelocity.v, "g"), smoothTime, maxSpeed, deltaTime, friction, accelRate);
                    var b = LeanSmooth.spring(current.b, target.b, Bridge.ref(currentVelocity.v, "b"), smoothTime, maxSpeed, deltaTime, friction, accelRate);
                    var a = LeanSmooth.spring(current.a, target.a, Bridge.ref(currentVelocity.v, "a"), smoothTime, maxSpeed, deltaTime, friction, accelRate);

                    return new pc.Color( r, g, b, a );
                },
                /*LeanSmooth.spring$1:static end.*/

                /*LeanSmooth.linear:static start.*/
                linear: function (current, target, moveSpeed, deltaTime) {
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    if (deltaTime < 0.0) {
                        deltaTime = UnityEngine.Time.deltaTime;
                    }

                    var targetGreater = (target > current);

                    var currentVelocity = deltaTime * moveSpeed * (targetGreater ? 1.0 : -1.0);

                    var returned = current + currentVelocity;

                    var returnPassed = returned - target;
                    if ((targetGreater && returnPassed > 0) || !targetGreater && returnPassed < 0) { // Has passed point, return target
                        return target;
                    }

                    return returned;
                },
                /*LeanSmooth.linear:static end.*/

                /*LeanSmooth.linear$2:static start.*/
                linear$2: function (current, target, moveSpeed, deltaTime) {
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    var x = LeanSmooth.linear(current.x, target.x, moveSpeed, deltaTime);
                    var y = LeanSmooth.linear(current.y, target.y, moveSpeed, deltaTime);
                    var z = LeanSmooth.linear(current.z, target.z, moveSpeed, deltaTime);

                    return new pc.Vec3( x, y, z );
                },
                /*LeanSmooth.linear$2:static end.*/

                /*LeanSmooth.linear$1:static start.*/
                linear$1: function (current, target, moveSpeed) {
                    var r = LeanSmooth.linear(current.r, target.r, moveSpeed);
                    var g = LeanSmooth.linear(current.g, target.g, moveSpeed);
                    var b = LeanSmooth.linear(current.b, target.b, moveSpeed);
                    var a = LeanSmooth.linear(current.a, target.a, moveSpeed);

                    return new pc.Color( r, g, b, a );
                },
                /*LeanSmooth.linear$1:static end.*/

                /*LeanSmooth.bounceOut:static start.*/
                bounceOut: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    if (friction === void 0) { friction = 2.0; }
                    if (accelRate === void 0) { accelRate = 0.5; }
                    if (hitDamping === void 0) { hitDamping = 0.9; }
                    if (deltaTime < 0.0) {
                        deltaTime = UnityEngine.Time.deltaTime;
                    }

                    var diff = target - current;

                    currentVelocity.v += deltaTime / smoothTime * accelRate * diff;

                    currentVelocity.v *= (1.0 - deltaTime * friction);

                    if (maxSpeed > 0.0 && maxSpeed < Math.abs(currentVelocity.v)) {
                        currentVelocity.v = maxSpeed * (currentVelocity.v === 0 ? 1 : Math.sign(currentVelocity.v));
                    }

                    var returned = current + currentVelocity.v;

                    var targetGreater = (target > current);
                    var returnPassed = returned - target;
                    if ((targetGreater && returnPassed > 0) || !targetGreater && returnPassed < 0) { // Start a bounce
                        currentVelocity.v = -currentVelocity.v * hitDamping;
                        returned = current + currentVelocity.v;
                    }

                    return returned;
                },
                /*LeanSmooth.bounceOut:static end.*/

                /*LeanSmooth.bounceOut$2:static start.*/
                bounceOut$2: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    if (friction === void 0) { friction = 2.0; }
                    if (accelRate === void 0) { accelRate = 0.5; }
                    if (hitDamping === void 0) { hitDamping = 0.9; }
                    var x = LeanSmooth.bounceOut(current.x, target.x, Bridge.ref(currentVelocity.v, "x"), smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping);
                    var y = LeanSmooth.bounceOut(current.y, target.y, Bridge.ref(currentVelocity.v, "y"), smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping);
                    var z = LeanSmooth.bounceOut(current.z, target.z, Bridge.ref(currentVelocity.v, "z"), smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping);

                    return new pc.Vec3( x, y, z );
                },
                /*LeanSmooth.bounceOut$2:static end.*/

                /*LeanSmooth.bounceOut$1:static start.*/
                bounceOut$1: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    if (friction === void 0) { friction = 2.0; }
                    if (accelRate === void 0) { accelRate = 0.5; }
                    if (hitDamping === void 0) { hitDamping = 0.9; }
                    var r = LeanSmooth.bounceOut(current.r, target.r, Bridge.ref(currentVelocity.v, "r"), smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping);
                    var g = LeanSmooth.bounceOut(current.g, target.g, Bridge.ref(currentVelocity.v, "g"), smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping);
                    var b = LeanSmooth.bounceOut(current.b, target.b, Bridge.ref(currentVelocity.v, "b"), smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping);
                    var a = LeanSmooth.bounceOut(current.a, target.a, Bridge.ref(currentVelocity.v, "a"), smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping);

                    return new pc.Color( r, g, b, a );
                },
                /*LeanSmooth.bounceOut$1:static end.*/


            }
        }
    });
    /*LeanSmooth end.*/

    /*LeanTween start.*/
    Bridge.define("LeanTween", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                throwErrors: false,
                tau: 0,
                PI_DIV2: 0,
                sequences: null,
                tweens: null,
                tweensFinished: null,
                tweensFinishedIds: null,
                tween: null,
                tweenMaxSearch: 0,
                maxTweens: 0,
                maxSequences: 0,
                frameRendered: 0,
                _tweenEmpty: null,
                dtEstimated: 0,
                dtManual: 0,
                dtActual: 0,
                global_counter: 0,
                i: 0,
                j: 0,
                finishedCnt: 0,
                punch: null,
                shake: null,
                maxTweenReached: 0,
                startSearch: 0,
                d: null,
                eventListeners: null,
                goListeners: null,
                eventsMaxSearch: 0,
                EVENTS_MAX: 0,
                LISTENERS_MAX: 0,
                INIT_LISTENERS_MAX: 0
            },
            props: {
                maxSearch: {
                    get: function () {
                        return LeanTween.tweenMaxSearch;
                    }
                },
                maxSimulataneousTweens: {
                    get: function () {
                        return LeanTween.maxTweens;
                    }
                },
                tweensRunning: {
                    get: function () {
                        var count = 0;
                        for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                            if (LeanTween.tweens[i].toggle) {
                                count = (count + 1) | 0;
                            }
                        }
                        return count;
                    }
                },
                tweenEmpty: {
                    get: function () {
                        LeanTween.init$1(LeanTween.maxTweens);
                        return LeanTween._tweenEmpty;
                    }
                }
            },
            ctors: {
                init: function () {
                    this.throwErrors = true;
                    this.tau = 6.28318548;
                    this.PI_DIV2 = 1.57079637;
                    this.tweenMaxSearch = -1;
                    this.maxTweens = 400;
                    this.maxSequences = 400;
                    this.frameRendered = -1;
                    this.dtEstimated = -1.0;
                    this.global_counter = 0;
                    this.punch = new pc.AnimationCurve({keyframes: [ new pc.Keyframe(0.0, 0.0, 0, 0), new pc.Keyframe(0.112586, 0.9976035, 0, 0), new pc.Keyframe(0.3120486, -0.1720615, 0, 0), new pc.Keyframe(0.4316337, 0.07030682, 0, 0), new pc.Keyframe(0.5524869, -0.03141804, 0, 0), new pc.Keyframe(0.6549395, 0.003909959, 0, 0), new pc.Keyframe(0.770987, -0.009817753, 0, 0), new pc.Keyframe(0.8838775, 0.001939224, 0, 0), new pc.Keyframe(1.0, 0.0, 0, 0) ]});
                    this.shake = new pc.AnimationCurve({keyframes: [ new pc.Keyframe(0.0, 0.0, 0, 0), new pc.Keyframe(0.25, 1.0, 0, 0), new pc.Keyframe(0.75, -1.0, 0, 0), new pc.Keyframe(1.0, 0.0, 0, 0) ]});
                    this.startSearch = 0;
                    this.eventsMaxSearch = 0;
                    this.EVENTS_MAX = 10;
                    this.LISTENERS_MAX = 10;
                    this.INIT_LISTENERS_MAX = LeanTween.LISTENERS_MAX;
                }
            },
            methods: {
                /*LeanTween.init:static start.*/
                init: function () {
                    LeanTween.init$1(LeanTween.maxTweens);
                },
                /*LeanTween.init:static end.*/

                /*LeanTween.init$1:static start.*/
                init$1: function (maxSimultaneousTweens) {
                    LeanTween.init$2(maxSimultaneousTweens, LeanTween.maxSequences);
                },
                /*LeanTween.init$1:static end.*/

                /*LeanTween.init$2:static start.*/
                init$2: function (maxSimultaneousTweens, maxSimultaneousSequences) {
                    if (LeanTween.tweens == null) {
                        LeanTween.maxTweens = maxSimultaneousTweens;
                        LeanTween.tweens = System.Array.init(LeanTween.maxTweens, null, LTDescr);
                        LeanTween.tweensFinished = System.Array.init(LeanTween.maxTweens, 0, System.Int32);
                        LeanTween.tweensFinishedIds = System.Array.init(LeanTween.maxTweens, 0, System.Int32);
                        LeanTween._tweenEmpty = new UnityEngine.GameObject.ctor();
                        LeanTween._tweenEmpty.name = "~LeanTween";
                        LeanTween._tweenEmpty.AddComponent$1(LeanTween);
                        LeanTween._tweenEmpty.isStatic = true;
                        LeanTween._tweenEmpty.hideFlags = UnityEngine.HideFlags.HideAndDontSave;
                        UnityEngine.Object.DontDestroyOnLoad(LeanTween._tweenEmpty);
                        for (var i = 0; i < LeanTween.maxTweens; i = (i + 1) | 0) {
                            LeanTween.tweens[i] = new LTDescr();
                            LeanTween.tweens[i].reset();
                        }

                        UnityEngine.SceneManagement.SceneManager.addsceneLoaded(LeanTween.onLevelWasLoaded54);

                        LeanTween.sequences = System.Array.init(maxSimultaneousSequences, null, LTSeq);

                        for (var i1 = 0; i1 < maxSimultaneousSequences; i1 = (i1 + 1) | 0) {
                            LeanTween.sequences[i1] = new LTSeq();
                        }
                    }
                },
                /*LeanTween.init$2:static end.*/

                /*LeanTween.reset:static start.*/
                reset: function () {
                    if (LeanTween.tweens != null) {
                        for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                            if (LeanTween.tweens[i] != null) {
                                LeanTween.tweens[i].reset();
                            }
                        }
                    }
                    LeanTween.tweens = null;
                    UnityEngine.MonoBehaviour.Destroy(LeanTween._tweenEmpty);
                },
                /*LeanTween.reset:static end.*/

                /*LeanTween.onLevelWasLoaded54:static start.*/
                onLevelWasLoaded54: function (scene, mode) {
                    LeanTween.internalOnLevelWasLoaded(scene.index);
                },
                /*LeanTween.onLevelWasLoaded54:static end.*/

                /*LeanTween.internalOnLevelWasLoaded:static start.*/
                internalOnLevelWasLoaded: function (lvl) {
                    // Debug.Log("reseting gui");
                    LTGUI.reset();
                },
                /*LeanTween.internalOnLevelWasLoaded:static end.*/

                /*LeanTween.update:static start.*/
                update: function () {
                    var $t;
                    if (LeanTween.frameRendered !== UnityEngine.Time.frameCount) { // make sure update is only called once per frame
                        LeanTween.init();


                        LeanTween.dtEstimated = LeanTween.dtEstimated < 0.0 ? 0.0 : ($t = UnityEngine.Time.unscaledDeltaTime, LeanTween.dtEstimated = $t, $t);

                        //      Debug.Log("Time.unscaledDeltaTime:"+Time.unscaledDeltaTime);

                        LeanTween.dtActual = UnityEngine.Time.deltaTime;
                        LeanTween.maxTweenReached = 0;
                        LeanTween.finishedCnt = 0;
                        // if(tweenMaxSearch>1500)
                        //           Debug.Log("tweenMaxSearch:"+tweenMaxSearch +" maxTweens:"+maxTweens);
                        for (var i = 0; i <= LeanTween.tweenMaxSearch && i < LeanTween.maxTweens; i = (i + 1) | 0) {
                            LeanTween.tween = LeanTween.tweens[i];
                            //              if(i==0 && tweens[i].toggle)
                            //                  Debug.Log("tweens["+i+"]"+tweens[i]);
                            if (LeanTween.tween.toggle) {
                                LeanTween.maxTweenReached = i;

                                if (LeanTween.tween.updateInternal()) { // returns true if the tween is finished with it's loop
                                    LeanTween.tweensFinished[LeanTween.finishedCnt] = i;
                                    LeanTween.tweensFinishedIds[LeanTween.finishedCnt] = LeanTween.tweens[i].id;
                                    LeanTween.finishedCnt = (LeanTween.finishedCnt + 1) | 0;
                                }
                            }
                        }

                        // Debug.Log("maxTweenReached:"+maxTweenReached);
                        LeanTween.tweenMaxSearch = LeanTween.maxTweenReached;
                        LeanTween.frameRendered = UnityEngine.Time.frameCount;

                        for (var i1 = 0; i1 < LeanTween.finishedCnt; i1 = (i1 + 1) | 0) {
                            LeanTween.j = LeanTween.tweensFinished[i1];
                            LeanTween.tween = LeanTween.tweens[LeanTween.j];

                            if (LeanTween.tween.id === LeanTween.tweensFinishedIds[i1]) {
                                //              Debug.Log("removing tween:"+tween);

                                if (LeanTween.tween.hasExtraOnCompletes && UnityEngine.Component.op_Inequality(LeanTween.tween.trans, null)) {
                                    var onComplete = LeanTween.tween._optional.onComplete;
                                    var param = LeanTween.tween._optional.onCompleteParam;
                                    var onCompletObject = LeanTween.tween._optional.onCompleteObject;

                                    LeanTween.removeTween(LeanTween.j);
                                    if (!Bridge.staticEquals(onComplete, null)) {
                                        onComplete();
                                    } else if (!Bridge.staticEquals(onCompletObject, null)) {
                                        onCompletObject(param);
                                    }
                                } else if (LeanTween.tween.type === TweenAction.GUI_ROTATE || LeanTween.tween.type === TweenAction.GUI_ROTATE) {
                                    var ltRect = LeanTween.tween._optional.ltRect;
                                    var onCompleteParam = Bridge.cast(LeanTween.tween._optional.onCompleteParam, UnityEngine.AudioClip);
                                    var to = LeanTween.tween.to.$clone();
                                    var vol = LeanTween.tween.from.x;

                                    LeanTween.removeTween(LeanTween.j);
                                    if (LeanTween.tween.type === TweenAction.GUI_ROTATE) {
                                        ltRect.rotateFinished = true;
                                    }
                                    if (LeanTween.tween.type === TweenAction.DELAYED_SOUND) {
                                        UnityEngine.AudioSource.PlayClipAtPoint(onCompleteParam, to, vol);
                                    }
                                } else {
                                    LeanTween.removeTween(LeanTween.j);
                                }

                            }
                        }

                    }
                },
                /*LeanTween.update:static end.*/

                /*LeanTween.removeTween$1:static start.*/
                removeTween$1: function (i, uniqueId) { // Only removes the tween if the unique id matches <summary>Move a GameObject to a certain location</summary>
                    if (LeanTween.tweens[i].uniqueId === uniqueId) {
                        LeanTween.removeTween(i);
                    }
                },
                /*LeanTween.removeTween$1:static end.*/

                /*LeanTween.removeTween:static start.*/
                removeTween: function (i, shouldReset) {
                    if (shouldReset === void 0) { shouldReset = true; }
                    if (LeanTween.tweens[i].toggle) {
                        LeanTween.tween = LeanTween.tweens[i];
                        LeanTween.tween.counter = 4294967295;
                        //logError("Removing tween["+i+"]:"+tweens[i]);
                        if (LeanTween.tween.destroyOnComplete) {
                            //              Debug.Log("destroying tween.type:"+tween.type+" ltRect"+(tweens[i]._optional.ltRect==null));
                            if (LeanTween.tween._optional.ltRect != null) {
                                //  Debug.Log("destroy i:"+i+" id:"+tweens[i].ltRect.id);
                                LTGUI.destroy(LeanTween.tween._optional.ltRect.id);
                            } else { // check if equal to tweenEmpty
                                if (UnityEngine.Component.op_Inequality(LeanTween.tween.trans, null) && UnityEngine.GameObject.op_Inequality(LeanTween.tween.trans.gameObject, LeanTween._tweenEmpty)) {
                                    UnityEngine.MonoBehaviour.Destroy(LeanTween.tween.trans.gameObject);
                                }
                            }
                        }
                        if (shouldReset) {
                            LeanTween.tween.reset();
                        }

                        //tweens[i].optional = null;
                        LeanTween.startSearch = i;
                        //Debug.Log("start search reset:"+startSearch + " i:"+i+" tweenMaxSearch:"+tweenMaxSearch);
                        if (((i + 1) | 0) >= LeanTween.tweenMaxSearch) {
                            //Debug.Log("reset to zero");
                            LeanTween.startSearch = 0;
                            //tweenMaxSearch--;
                        }
                    }
                },
                /*LeanTween.removeTween:static end.*/

                /*LeanTween.add:static start.*/
                add: function (a, b) {
                    var c = System.Array.init(a.length, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (LeanTween.i = 0; LeanTween.i < a.length; LeanTween.i = (LeanTween.i + 1) | 0) {
                        c[LeanTween.i] = a[LeanTween.i].$clone().add( b );
                    }

                    return c;
                },
                /*LeanTween.add:static end.*/

                /*LeanTween.closestRot:static start.*/
                closestRot: function (from, to) {
                    var minusWhole = 0 - (360 - to);
                    var plusWhole = 360 + to;
                    var toDiffAbs = Math.abs(to - from);
                    var minusDiff = Math.abs(minusWhole - from);
                    var plusDiff = Math.abs(plusWhole - from);
                    if (toDiffAbs < minusDiff && toDiffAbs < plusDiff) {
                        return to;
                    } else {
                        if (minusDiff < plusDiff) {
                            return minusWhole;
                        } else {
                            return plusWhole;
                        }
                    }
                },
                /*LeanTween.closestRot:static end.*/

                /*LeanTween.cancelAll:static start.*/
                cancelAll: function () {
                    LeanTween.cancelAll$1(false);
                },
                /*LeanTween.cancelAll:static end.*/

                /*LeanTween.cancelAll$1:static start.*/
                cancelAll$1: function (callComplete) {
                    LeanTween.init();
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        if (UnityEngine.Component.op_Inequality(LeanTween.tweens[i].trans, null)) {
                            if (callComplete && !Bridge.staticEquals(LeanTween.tweens[i].optional.onComplete, null)) {
                                LeanTween.tweens[i].optional.onComplete();
                            }
                            LeanTween.removeTween(i);
                        }
                    }
                },
                /*LeanTween.cancelAll$1:static end.*/

                /*LeanTween.cancel$3:static start.*/
                cancel$3: function (gameObject) {
                    LeanTween.cancel$4(gameObject, false);
                },
                /*LeanTween.cancel$3:static end.*/

                /*LeanTween.cancel$4:static start.*/
                cancel$4: function (gameObject, callOnComplete, matchType) {
                    if (matchType === void 0) { matchType = 51; }
                    LeanTween.init();
                    var trans = gameObject.transform;
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        var tween = LeanTween.tweens[i];
                        if (matchType === TweenAction.NONE || matchType === tween.type) {
                            if (tween != null && tween.toggle && UnityEngine.Component.op_Equality(tween.trans, trans)) {
                                if (callOnComplete && !Bridge.staticEquals(tween.optional.onComplete, null)) {
                                    tween.optional.onComplete();
                                }
                                LeanTween.removeTween(i);
                            }
                        }
                    }
                },
                /*LeanTween.cancel$4:static end.*/

                /*LeanTween.cancel$6:static start.*/
                cancel$6: function (rect) {
                    LeanTween.cancel$4(rect.gameObject, false);
                },
                /*LeanTween.cancel$6:static end.*/

                /*LeanTween.cancel$5:static start.*/
                cancel$5: function (gameObject, uniqueId, callOnComplete) {
                    if (callOnComplete === void 0) { callOnComplete = false; }
                    if (uniqueId >= 0) {
                        LeanTween.init();
                        var backId = uniqueId & 65535;
                        var backCounter = uniqueId >> 16;
                        // Debug.Log("uniqueId:"+uniqueId+ " id:"+backId +" counter:"+backCounter + " setCounter:"+ tw     eens[backId].counter + " tweens[id].type:"+tweens[backId].type);
                        if (UnityEngine.Component.op_Equality(LeanTween.tweens[backId].trans, null) || (UnityEngine.GameObject.op_Equality(LeanTween.tweens[backId].trans.gameObject, gameObject) && System.Int64(LeanTween.tweens[backId].counter).equals(System.Int64(backCounter)))) {
                            if (callOnComplete && !Bridge.staticEquals(LeanTween.tweens[backId].optional.onComplete, null)) {
                                LeanTween.tweens[backId].optional.onComplete();
                            }
                            LeanTween.removeTween(backId);
                        }
                    }
                },
                /*LeanTween.cancel$5:static end.*/

                /*LeanTween.cancel:static start.*/
                cancel: function (ltRect, uniqueId) {
                    if (uniqueId >= 0) {
                        LeanTween.init();
                        var backId = uniqueId & 65535;
                        var backCounter = uniqueId >> 16;
                        // Debug.Log("uniqueId:"+uniqueId+ " id:"+backId +" action:"+(TweenAction)backType + " tweens[id].type:"+tweens[backId].type);
                        if (Bridge.referenceEquals(LeanTween.tweens[backId]._optional.ltRect, ltRect) && System.Int64(LeanTween.tweens[backId].counter).equals(System.Int64(backCounter))) {
                            LeanTween.removeTween(backId);
                        }
                    }
                },
                /*LeanTween.cancel:static end.*/

                /*LeanTween.cancel$1:static start.*/
                cancel$1: function (uniqueId) {
                    LeanTween.cancel$2(uniqueId, false);
                },
                /*LeanTween.cancel$1:static end.*/

                /*LeanTween.cancel$2:static start.*/
                cancel$2: function (uniqueId, callOnComplete) {
                    if (uniqueId >= 0) {
                        LeanTween.init();
                        var backId = uniqueId & 65535;
                        var backCounter = uniqueId >> 16;
                        if (backId > ((LeanTween.tweens.length - 1) | 0)) { // sequence
                            var sequenceId = (backId - LeanTween.tweens.length) | 0;
                            var seq = LeanTween.sequences[sequenceId];
                            // Debug.Log("sequenceId:" + sequenceId+" maxSequences:"+maxSequences+" prev:"+seq.previous);

                            for (var i = 0; i < LeanTween.maxSequences; i = (i + 1) | 0) {
                                if (seq.current.tween != null) {
                                    var tweenId = seq.current.tween.uniqueId;
                                    var tweenIndex = tweenId & 65535;
                                    LeanTween.removeTween(tweenIndex);
                                }
                                if (seq.current.previous == null) {
                                    break;
                                }
                                seq.current = seq.current.previous;
                            }
                        } else { // tween
                            // Debug.Log("uniqueId:"+uniqueId+ " id:"+backId +" action:"+(TweenAction)backType + " tweens[id].type:"+tweens[backId].type);
                            if (System.Int64(LeanTween.tweens[backId].counter).equals(System.Int64(backCounter))) {
                                if (callOnComplete && !Bridge.staticEquals(LeanTween.tweens[backId].optional.onComplete, null)) {
                                    LeanTween.tweens[backId].optional.onComplete();
                                }
                                LeanTween.removeTween(backId);
                            }
                        }
                    }
                },
                /*LeanTween.cancel$2:static end.*/

                /*LeanTween.descr:static start.*/
                descr: function (uniqueId) {
                    LeanTween.init();

                    var backId = uniqueId & 65535;
                    var backCounter = uniqueId >> 16;

                    //      Debug.Log("backId:" + backId+" backCounter:"+backCounter);
                    if (LeanTween.tweens[backId] != null && LeanTween.tweens[backId].uniqueId === uniqueId && System.Int64(LeanTween.tweens[backId].counter).equals(System.Int64(backCounter))) {
                        // Debug.Log("tween count:" + tweens[backId].counter);
                        return LeanTween.tweens[backId];
                    }
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        if (LeanTween.tweens[i].uniqueId === uniqueId && System.Int64(LeanTween.tweens[i].counter).equals(System.Int64(backCounter))) {
                            return LeanTween.tweens[i];
                        }
                    }
                    return null;
                },
                /*LeanTween.descr:static end.*/

                /*LeanTween.description:static start.*/
                description: function (uniqueId) {
                    return LeanTween.descr(uniqueId);
                },
                /*LeanTween.description:static end.*/

                /*LeanTween.descriptions:static start.*/
                descriptions: function (gameObject) {
                    if (gameObject === void 0) { gameObject = null; }
                    if (UnityEngine.GameObject.op_Equality(gameObject, null)) {
                        return null;
                    }

                    var descrs = new (System.Collections.Generic.List$1(LTDescr)).ctor();
                    var trans = gameObject.transform;
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        if (LeanTween.tweens[i].toggle && UnityEngine.Component.op_Equality(LeanTween.tweens[i].trans, trans)) {
                            descrs.add(LeanTween.tweens[i]);
                        }
                    }
                    return descrs.ToArray();
                },
                /*LeanTween.descriptions:static end.*/

                /*LeanTween.pause$2:static start.*/
                pause$2: function (gameObject, uniqueId) {
                    LeanTween.pause(uniqueId);
                },
                /*LeanTween.pause$2:static end.*/

                /*LeanTween.pause:static start.*/
                pause: function (uniqueId) {
                    var backId = uniqueId & 65535;
                    var backCounter = uniqueId >> 16;
                    if (System.Int64(LeanTween.tweens[backId].counter).equals(System.Int64(backCounter))) {
                        LeanTween.tweens[backId].pause();
                    }
                },
                /*LeanTween.pause:static end.*/

                /*LeanTween.pause$1:static start.*/
                pause$1: function (gameObject) {
                    var trans = gameObject.transform;
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        if (UnityEngine.Component.op_Equality(LeanTween.tweens[i].trans, trans)) {
                            LeanTween.tweens[i].pause();
                        }
                    }
                },
                /*LeanTween.pause$1:static end.*/

                /*LeanTween.pauseAll:static start.*/
                pauseAll: function () {
                    LeanTween.init();
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        LeanTween.tweens[i].pause();
                    }
                },
                /*LeanTween.pauseAll:static end.*/

                /*LeanTween.resumeAll:static start.*/
                resumeAll: function () {
                    LeanTween.init();
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        LeanTween.tweens[i].resume();
                    }
                },
                /*LeanTween.resumeAll:static end.*/

                /*LeanTween.resume$2:static start.*/
                resume$2: function (gameObject, uniqueId) {
                    LeanTween.resume(uniqueId);
                },
                /*LeanTween.resume$2:static end.*/

                /*LeanTween.resume:static start.*/
                resume: function (uniqueId) {
                    var backId = uniqueId & 65535;
                    var backCounter = uniqueId >> 16;
                    if (System.Int64(LeanTween.tweens[backId].counter).equals(System.Int64(backCounter))) {
                        LeanTween.tweens[backId].resume();
                    }
                },
                /*LeanTween.resume:static end.*/

                /*LeanTween.resume$1:static start.*/
                resume$1: function (gameObject) {
                    var trans = gameObject.transform;
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        if (UnityEngine.Component.op_Equality(LeanTween.tweens[i].trans, trans)) {
                            LeanTween.tweens[i].resume();
                        }
                    }
                },
                /*LeanTween.resume$1:static end.*/

                /*LeanTween.isPaused$1:static start.*/
                isPaused$1: function (gameObject) {
                    if (gameObject === void 0) { gameObject = null; }
                    if (UnityEngine.GameObject.op_Equality(gameObject, null)) {
                        for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                            if (Bridge.equals(Bridge.box(LeanTween.tweens[i].direction, System.Single, System.Single.format, System.Single.getHashCode), Bridge.box(0.0, System.Single, System.Single.format, System.Single.getHashCode))) {
                                return true;
                            }
                        }
                        return false;
                    }
                    var trans = gameObject.transform;
                    for (var i1 = 0; i1 <= LeanTween.tweenMaxSearch; i1 = (i1 + 1) | 0) {
                        if (Bridge.equals(Bridge.box(LeanTween.tweens[i1].direction, System.Single, System.Single.format, System.Single.getHashCode), Bridge.box(0.0, System.Single, System.Single.format, System.Single.getHashCode)) && UnityEngine.Component.op_Equality(LeanTween.tweens[i1].trans, trans)) {
                            return true;
                        }
                    }
                    return false;
                },
                /*LeanTween.isPaused$1:static end.*/

                /*LeanTween.isPaused$2:static start.*/
                isPaused$2: function (rect) {
                    return LeanTween.isTweening$2(rect.gameObject);
                },
                /*LeanTween.isPaused$2:static end.*/

                /*LeanTween.isPaused:static start.*/
                isPaused: function (uniqueId) {
                    var backId = uniqueId & 65535;
                    var backCounter = uniqueId >> 16;
                    if (backId < 0 || backId >= LeanTween.maxTweens) {
                        return false;
                    }
                    // Debug.Log("tweens[backId].counter:"+tweens[backId].counter+" backCounter:"+backCounter +" toggle:"+tweens[backId].toggle);
                    if (System.Int64(LeanTween.tweens[backId].counter).equals(System.Int64(backCounter)) && Bridge.equals(Bridge.box(LeanTween.tweens[LeanTween.i].direction, System.Single, System.Single.format, System.Single.getHashCode), Bridge.box(0.0, System.Single, System.Single.format, System.Single.getHashCode))) {
                        return true;
                    }
                    return false;
                },
                /*LeanTween.isPaused:static end.*/

                /*LeanTween.isTweening$2:static start.*/
                isTweening$2: function (gameObject) {
                    if (gameObject === void 0) { gameObject = null; }
                    if (UnityEngine.GameObject.op_Equality(gameObject, null)) {
                        for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                            if (LeanTween.tweens[i].toggle) {
                                return true;
                            }
                        }
                        return false;
                    }
                    var trans = gameObject.transform;
                    for (var i1 = 0; i1 <= LeanTween.tweenMaxSearch; i1 = (i1 + 1) | 0) {
                        if (LeanTween.tweens[i1].toggle && UnityEngine.Component.op_Equality(LeanTween.tweens[i1].trans, trans)) {
                            return true;
                        }
                    }
                    return false;
                },
                /*LeanTween.isTweening$2:static end.*/

                /*LeanTween.isTweening$3:static start.*/
                isTweening$3: function (rect) {
                    return LeanTween.isTweening$2(rect.gameObject);
                },
                /*LeanTween.isTweening$3:static end.*/

                /*LeanTween.isTweening$1:static start.*/
                isTweening$1: function (uniqueId) {
                    var backId = uniqueId & 65535;
                    var backCounter = uniqueId >> 16;
                    if (backId < 0 || backId >= LeanTween.maxTweens) {
                        return false;
                    }
                    // Debug.Log("tweens[backId].counter:"+tweens[backId].counter+" backCounter:"+backCounter +" toggle:"+tweens[backId].toggle);
                    if (System.Int64(LeanTween.tweens[backId].counter).equals(System.Int64(backCounter)) && LeanTween.tweens[backId].toggle) {
                        return true;
                    }
                    return false;
                },
                /*LeanTween.isTweening$1:static end.*/

                /*LeanTween.isTweening:static start.*/
                isTweening: function (ltRect) {
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        if (LeanTween.tweens[i].toggle && Bridge.referenceEquals(LeanTween.tweens[i]._optional.ltRect, ltRect)) {
                            return true;
                        }
                    }
                    return false;
                },
                /*LeanTween.isTweening:static end.*/

                /*LeanTween.drawBezierPath:static start.*/
                drawBezierPath: function (a, b, c, d, arrowSize, arrowTransform) {
                    if (arrowSize === void 0) { arrowSize = 0.0; }
                    if (arrowTransform === void 0) { arrowTransform = null; }
                    var last = a.$clone();
                    var p = new UnityEngine.Vector3();
                    var aa = (a.$clone().scale( -1 ).add( (b.$clone().sub( c )).clone().scale( 3 ) ).add( d ));
                    var bb = (a.$clone().add( c )).clone().scale( 3 ).sub( b.clone().scale( 6 ) );
                    var cc = (b.$clone().sub( a )).clone().scale( 3 );

                    var t;

                    if (arrowSize > 0.0) {
                        var beforePos = arrowTransform.position.$clone();
                        var beforeQ = arrowTransform.rotation.$clone();
                        var distanceTravelled = 0.0;

                        for (var k = 1.0; k <= 120.0; k++) {
                            t = k / 120.0;
                            p = ((aa.$clone().clone().scale( t ).add( (bb) )).clone().scale( t ).add( cc )).clone().scale( t ).add( a );
                            pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawLine', null );
                            distanceTravelled += (p.$clone().sub( last )).length();
                            if (distanceTravelled > 1.0) {
                                distanceTravelled = distanceTravelled - 1.0;
                                /* float deltaY = p.y - last.y;
                                float deltaX = p.x - last.x;
                                float ang = Mathf.Atan(deltaY / deltaX);
                                Vector3 arrow = p + new Vector3( Mathf.Cos(ang+2.5f), Mathf.Sin(ang+2.5f), 0f)*0.5f;
                                Gizmos.DrawLine(p, arrow);
                                arrow = p + new Vector3( Mathf.Cos(ang+-2.5f), Mathf.Sin(ang+-2.5f), 0f)*0.5f;
                                Gizmos.DrawLine(p, arrow);*/

                                arrowTransform.position = p.$clone();
                                arrowTransform.LookAt$3(last, new pc.Vec3( 0, 0, 1 ));
                                var to = arrowTransform.TransformDirection$1(pc.Vec3.RIGHT.clone());
                                // Debug.Log("to:"+to+" tweenEmpty.transform.position:"+arrowTransform.position);
                                var back = (last.$clone().sub( p ));
                                back = back.clone().normalize().$clone();
                                pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawLine', null );
                                to = arrowTransform.TransformDirection$1(pc.Vec3.RIGHT.clone().scale( -1 ));
                                pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawLine', null );
                            }
                            last = p.$clone();
                        }

                        arrowTransform.position = beforePos.$clone();
                        arrowTransform.rotation = beforeQ.$clone();
                    } else {
                        for (var k1 = 1.0; k1 <= 30.0; k1++) {
                            t = k1 / 30.0;
                            p = ((aa.$clone().clone().scale( t ).add( (bb) )).clone().scale( t ).add( cc )).clone().scale( t ).add( a );
                            pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawLine', null );
                            last = p.$clone();
                        }
                    }
                },
                /*LeanTween.drawBezierPath:static end.*/

                /*LeanTween.logError:static start.*/
                logError: function (error) {
                    if (LeanTween.throwErrors) {
                        UnityEngine.Debug.LogError$2(error);
                    } else {
                        UnityEngine.Debug.Log$1(error);
                    }
                    return null;
                },
                /*LeanTween.logError:static end.*/

                /*LeanTween.options$1:static start.*/
                options$1: function (seed) {
                    UnityEngine.Debug.LogError$2("error this function is no longer used");
                    return null;
                },
                /*LeanTween.options$1:static end.*/

                /*LeanTween.options:static start.*/
                options: function () {
                    LeanTween.init();

                    var found = false;
                    //      Debug.Log("Search start");
                    for (LeanTween.j = 0, LeanTween.i = LeanTween.startSearch; LeanTween.j <= LeanTween.maxTweens; LeanTween.i = (LeanTween.i + 1) | 0) {
                        if (LeanTween.j >= LeanTween.maxTweens) {
                            return Bridge.as(LeanTween.logError("LeanTween - You have run out of available spaces for tweening. To avoid this error increase the number of spaces to available for tweening when you initialize the LeanTween class ex: LeanTween.init( " + (Bridge.Int.mul(LeanTween.maxTweens, 2)) + " );"), LTDescr);
                        }
                        if (LeanTween.i >= LeanTween.maxTweens) {
                            LeanTween.i = 0;
                        }
                        //          Debug.Log("searching i:"+i);
                        if (LeanTween.tweens[LeanTween.i].toggle === false) {
                            if (((LeanTween.i + 1) | 0) > LeanTween.tweenMaxSearch && ((LeanTween.i + 1) | 0) < LeanTween.maxTweens) {
                                LeanTween.tweenMaxSearch = (LeanTween.i + 1) | 0;
                            }
                            LeanTween.startSearch = (LeanTween.i + 1) | 0;
                            found = true;
                            break;
                        }

                        LeanTween.j = (LeanTween.j + 1) | 0;
                    }
                    if (found === false) {
                        LeanTween.logError("no available tween found!");
                    }

                    // Debug.Log("new tween with i:"+i+" counter:"+tweens[i].counter+" tweenMaxSearch:"+tweenMaxSearch+" tween:"+tweens[i]);

                    LeanTween.global_counter = (LeanTween.global_counter + 1) >>> 0;
                    if (LeanTween.global_counter > 32768) {
                        LeanTween.global_counter = 0;
                    }

                    LeanTween.tweens[LeanTween.i].setId(((LeanTween.i) >>> 0), LeanTween.global_counter);

                    return LeanTween.tweens[LeanTween.i];
                },
                /*LeanTween.options:static end.*/

                /*LeanTween.pushNewTween:static start.*/
                pushNewTween: function (gameObject, to, time, tween) {
                    LeanTween.init$1(LeanTween.maxTweens);
                    if (UnityEngine.GameObject.op_Equality(gameObject, null) || tween == null) {
                        return null;
                    }

                    tween.toggle = true;
                    tween.trans = gameObject.transform;
                    tween.to = to.$clone();
                    tween.time = time;

                    if (tween.time <= 0.0) {
                        tween.updateInternal();
                    }
                    //tween.hasPhysics = gameObject.rigidbody!=null;

                    return tween;
                },
                /*LeanTween.pushNewTween:static end.*/

                /*LeanTween.play:static start.*/
                play: function (rectTransform, sprites) {
                    var defaultFrameRate = 0.25;
                    var time = defaultFrameRate * sprites.length;
                    return LeanTween.pushNewTween(rectTransform.gameObject, new pc.Vec3( sprites.length - 1.0, 0, 0 ), time, LeanTween.options().setCanvasPlaySprite().setSprites(sprites).setRepeat(-1));
                },
                /*LeanTween.play:static end.*/

                /*LeanTween.sequence:static start.*/
                sequence: function (initSequence) {
                    if (initSequence === void 0) { initSequence = true; }
                    LeanTween.init$1(LeanTween.maxTweens);
                    // Loop through and find available sequence
                    for (var i = 0; i < LeanTween.sequences.length; i = (i + 1) | 0) {
                        //          Debug.Log("i:" + i + " sequences[i]:" + sequences[i]);
                        if (LeanTween.sequences[i].tween == null || LeanTween.sequences[i].tween.toggle === false) {
                            if (LeanTween.sequences[i].toggle === false) {
                                var seq = LeanTween.sequences[i];
                                if (initSequence) {
                                    seq.init(((((i + LeanTween.tweens.length) | 0)) >>> 0), LeanTween.global_counter);

                                    LeanTween.global_counter = (LeanTween.global_counter + 1) >>> 0;
                                    if (LeanTween.global_counter > 32768) {
                                        LeanTween.global_counter = 0;
                                    }
                                } else {
                                    seq.reset();
                                }

                                return seq;
                            }
                        }
                    }

                    return null;
                },
                /*LeanTween.sequence:static end.*/

                /*LeanTween.alpha$1:static start.*/
                alpha$1: function (gameObject, to, time) {
                    var lt = LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setAlpha());

                    var ren = gameObject.GetComponent(UnityEngine.SpriteRenderer);
                    lt.spriteRen = ren;
                    return lt;
                },
                /*LeanTween.alpha$1:static end.*/

                /*LeanTween.alpha:static start.*/
                alpha: function (ltRect, to, time) {
                    ltRect.alphaEnabled = true;
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setGUIAlpha().setRect(ltRect));
                },
                /*LeanTween.alpha:static end.*/

                /*LeanTween.alpha$2:static start.*/
                alpha$2: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setCanvasAlpha().setRect$2(rectTrans));
                },
                /*LeanTween.alpha$2:static end.*/

                /*LeanTween.textAlpha:static start.*/
                textAlpha: function (rectTransform, to, time) {
                    return LeanTween.pushNewTween(rectTransform.gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setTextAlpha());
                },
                /*LeanTween.textAlpha:static end.*/

                /*LeanTween.alphaText:static start.*/
                alphaText: function (rectTransform, to, time) {
                    return LeanTween.pushNewTween(rectTransform.gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setTextAlpha());
                },
                /*LeanTween.alphaText:static end.*/

                /*LeanTween.alphaCanvas:static start.*/
                alphaCanvas: function (canvasGroup, to, time) {
                    return LeanTween.pushNewTween(canvasGroup.gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setCanvasGroupAlpha());
                },
                /*LeanTween.alphaCanvas:static end.*/

                /*LeanTween.alphaVertex:static start.*/
                alphaVertex: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setAlphaVertex());
                },
                /*LeanTween.alphaVertex:static end.*/

                /*LeanTween.color:static start.*/
                color: function (gameObject, to, time) {
                    var lt = LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, to.a, 0.0 ), time, LeanTween.options().setColor().setPoint(new pc.Vec3( to.r, to.g, to.b )));
                    var ren = gameObject.GetComponent(UnityEngine.SpriteRenderer);
                    lt.spriteRen = ren;
                    return lt;
                },
                /*LeanTween.color:static end.*/

                /*LeanTween.color$1:static start.*/
                color$1: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, new pc.Vec3( 1.0, to.a, 0.0 ), time, LeanTween.options().setCanvasColor().setRect$2(rectTrans).setPoint(new pc.Vec3( to.r, to.g, to.b )));
                },
                /*LeanTween.color$1:static end.*/

                /*LeanTween.textColor:static start.*/
                textColor: function (rectTransform, to, time) {
                    return LeanTween.pushNewTween(rectTransform.gameObject, new pc.Vec3( 1.0, to.a, 0.0 ), time, LeanTween.options().setTextColor().setPoint(new pc.Vec3( to.r, to.g, to.b )));
                },
                /*LeanTween.textColor:static end.*/

                /*LeanTween.colorText:static start.*/
                colorText: function (rectTransform, to, time) {
                    return LeanTween.pushNewTween(rectTransform.gameObject, new pc.Vec3( 1.0, to.a, 0.0 ), time, LeanTween.options().setTextColor().setPoint(new pc.Vec3( to.r, to.g, to.b )));
                },
                /*LeanTween.colorText:static end.*/

                /*LeanTween.delayedCall:static start.*/
                delayedCall: function (delayTime, callback) {
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, pc.Vec3.ZERO.clone(), delayTime, LeanTween.options().setCallback().setOnComplete(callback));
                },
                /*LeanTween.delayedCall:static end.*/

                /*LeanTween.delayedCall$1:static start.*/
                delayedCall$1: function (delayTime, callback) {
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, pc.Vec3.ZERO.clone(), delayTime, LeanTween.options().setCallback().setOnComplete$1(callback));
                },
                /*LeanTween.delayedCall$1:static end.*/

                /*LeanTween.delayedCall$2:static start.*/
                delayedCall$2: function (gameObject, delayTime, callback) {
                    var opt = LeanTween.options().setCallback().setOnComplete(callback);
                    return LeanTween.pushNewTween(gameObject, pc.Vec3.ZERO.clone(), delayTime, opt);
                },
                /*LeanTween.delayedCall$2:static end.*/

                /*LeanTween.delayedCall$3:static start.*/
                delayedCall$3: function (gameObject, delayTime, callback) {
                    return LeanTween.pushNewTween(gameObject, pc.Vec3.ZERO.clone(), delayTime, LeanTween.options().setCallback().setOnComplete$1(callback));
                },
                /*LeanTween.delayedCall$3:static end.*/

                /*LeanTween.destroyAfter:static start.*/
                destroyAfter: function (rect, delayTime) {
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, pc.Vec3.ZERO.clone(), delayTime, LeanTween.options().setCallback().setRect(rect).setDestroyOnComplete(true));
                },
                /*LeanTween.destroyAfter:static end.*/

                /*LeanTween.move$5:static start.*/
                move$5: function (gameObject, to, time) {
                    var opt = LeanTween.options().setMove();
                    return LeanTween.pushNewTween(gameObject, to, time, opt);
                },
                /*LeanTween.move$5:static end.*/

                /*LeanTween.move$4:static start.*/
                move$4: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to.x, to.y, gameObject.transform.position.z ), time, LeanTween.options().setMove());
                },
                /*LeanTween.move$4:static end.*/

                /*LeanTween.move$6:static start.*/
                move$6: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveCurved();
                    if (LeanTween.d.optional.path == null) {
                        LeanTween.d.optional.path = new LTBezierPath.$ctor1(to);
                    } else {
                        LeanTween.d.optional.path.setPoints(to);
                    }

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.move$6:static end.*/

                /*LeanTween.move$1:static start.*/
                move$1: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveCurved();
                    LeanTween.d.optional.path = to;

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.move$1:static end.*/

                /*LeanTween.move$2:static start.*/
                move$2: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveSpline();
                    LeanTween.d.optional.spline = to;

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.move$2:static end.*/

                /*LeanTween.move:static start.*/
                move: function (ltRect, to, time) {
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, UnityEngine.Vector3.FromVector2(to), time, LeanTween.options().setGUIMove().setRect(ltRect));
                },
                /*LeanTween.move:static end.*/

                /*LeanTween.move$3:static start.*/
                move$3: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, pc.Vec3.ZERO.clone(), time, LeanTween.options().setTo(to).setMoveToTransform());
                },
                /*LeanTween.move$3:static end.*/

                /*LeanTween.move$7:static start.*/
                move$7: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, to, time, LeanTween.options().setCanvasMove().setRect$2(rectTrans));
                },
                /*LeanTween.move$7:static end.*/

                /*LeanTween.moveSpline$1:static start.*/
                moveSpline$1: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveSpline();
                    LeanTween.d.optional.spline = new LTSpline.ctor(to);

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.moveSpline$1:static end.*/

                /*LeanTween.moveSpline:static start.*/
                moveSpline: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveSpline();
                    LeanTween.d.optional.spline = to;

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.moveSpline:static end.*/

                /*LeanTween.moveSplineLocal:static start.*/
                moveSplineLocal: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveSplineLocal();
                    LeanTween.d.optional.spline = new LTSpline.ctor(to);

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.moveSplineLocal:static end.*/

                /*LeanTween.moveMargin:static start.*/
                moveMargin: function (ltRect, to, time) {
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, UnityEngine.Vector3.FromVector2(to), time, LeanTween.options().setGUIMoveMargin().setRect(ltRect));
                },
                /*LeanTween.moveMargin:static end.*/

                /*LeanTween.moveX:static start.*/
                moveX: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setMoveX());
                },
                /*LeanTween.moveX:static end.*/

                /*LeanTween.moveX$1:static start.*/
                moveX$1: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setCanvasMoveX().setRect$2(rectTrans));
                },
                /*LeanTween.moveX$1:static end.*/

                /*LeanTween.moveY:static start.*/
                moveY: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setMoveY());
                },
                /*LeanTween.moveY:static end.*/

                /*LeanTween.moveY$1:static start.*/
                moveY$1: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setCanvasMoveY().setRect$2(rectTrans));
                },
                /*LeanTween.moveY$1:static end.*/

                /*LeanTween.moveZ:static start.*/
                moveZ: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setMoveZ());
                },
                /*LeanTween.moveZ:static end.*/

                /*LeanTween.moveZ$1:static start.*/
                moveZ$1: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setCanvasMoveZ().setRect$2(rectTrans));
                },
                /*LeanTween.moveZ$1:static end.*/

                /*LeanTween.moveLocal$2:static start.*/
                moveLocal$2: function (gameObject, to, time) {
                    var opt = LeanTween.options().setMoveLocal();
                    return LeanTween.pushNewTween(gameObject, to, time, opt);
                },
                /*LeanTween.moveLocal$2:static end.*/

                /*LeanTween.moveLocal$3:static start.*/
                moveLocal$3: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveCurvedLocal();
                    if (LeanTween.d.optional.path == null) {
                        LeanTween.d.optional.path = new LTBezierPath.$ctor1(to);
                    } else {
                        LeanTween.d.optional.path.setPoints(to);
                    }

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.moveLocal$3:static end.*/

                /*LeanTween.moveLocal:static start.*/
                moveLocal: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveCurvedLocal();
                    LeanTween.d.optional.path = to;

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.moveLocal:static end.*/

                /*LeanTween.moveLocal$1:static start.*/
                moveLocal$1: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveSplineLocal();
                    LeanTween.d.optional.spline = to;

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.moveLocal$1:static end.*/

                /*LeanTween.moveLocalX:static start.*/
                moveLocalX: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setMoveLocalX());
                },
                /*LeanTween.moveLocalX:static end.*/

                /*LeanTween.moveLocalY:static start.*/
                moveLocalY: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setMoveLocalY());
                },
                /*LeanTween.moveLocalY:static end.*/

                /*LeanTween.moveLocalZ:static start.*/
                moveLocalZ: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setMoveLocalZ());
                },
                /*LeanTween.moveLocalZ:static end.*/

                /*LeanTween.rotate$1:static start.*/
                rotate$1: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, to, time, LeanTween.options().setRotate());
                },
                /*LeanTween.rotate$1:static end.*/

                /*LeanTween.rotate:static start.*/
                rotate: function (ltRect, to, time) {
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setGUIRotate().setRect(ltRect));
                },
                /*LeanTween.rotate:static end.*/

                /*LeanTween.rotate$2:static start.*/
                rotate$2: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setCanvasRotateAround().setRect$2(rectTrans).setAxis(new pc.Vec3( 0, 0, 1 )));
                },
                /*LeanTween.rotate$2:static end.*/

                /*LeanTween.rotate$3:static start.*/
                rotate$3: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, to, time, LeanTween.options().setCanvasRotateAround().setRect$2(rectTrans).setAxis(new pc.Vec3( 0, 0, 1 )));
                },
                /*LeanTween.rotate$3:static end.*/

                /*LeanTween.rotateLocal:static start.*/
                rotateLocal: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, to, time, LeanTween.options().setRotateLocal());
                },
                /*LeanTween.rotateLocal:static end.*/

                /*LeanTween.rotateX:static start.*/
                rotateX: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setRotateX());
                },
                /*LeanTween.rotateX:static end.*/

                /*LeanTween.rotateY:static start.*/
                rotateY: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setRotateY());
                },
                /*LeanTween.rotateY:static end.*/

                /*LeanTween.rotateZ:static start.*/
                rotateZ: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setRotateZ());
                },
                /*LeanTween.rotateZ:static end.*/

                /*LeanTween.rotateAround:static start.*/
                rotateAround: function (gameObject, axis, add, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( add, 0.0, 0.0 ), time, LeanTween.options().setAxis(axis).setRotateAround());
                },
                /*LeanTween.rotateAround:static end.*/

                /*LeanTween.rotateAround$1:static start.*/
                rotateAround$1: function (rectTrans, axis, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setCanvasRotateAround().setRect$2(rectTrans).setAxis(axis));
                },
                /*LeanTween.rotateAround$1:static end.*/

                /*LeanTween.rotateAroundLocal:static start.*/
                rotateAroundLocal: function (gameObject, axis, add, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( add, 0.0, 0.0 ), time, LeanTween.options().setRotateAroundLocal().setAxis(axis));
                },
                /*LeanTween.rotateAroundLocal:static end.*/

                /*LeanTween.rotateAroundLocal$1:static start.*/
                rotateAroundLocal$1: function (rectTrans, axis, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setCanvasRotateAroundLocal().setRect$2(rectTrans).setAxis(axis));
                },
                /*LeanTween.rotateAroundLocal$1:static end.*/

                /*LeanTween.scale$1:static start.*/
                scale$1: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, to, time, LeanTween.options().setScale());
                },
                /*LeanTween.scale$1:static end.*/

                /*LeanTween.scale:static start.*/
                scale: function (ltRect, to, time) {
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, UnityEngine.Vector3.FromVector2(to), time, LeanTween.options().setGUIScale().setRect(ltRect));
                },
                /*LeanTween.scale:static end.*/

                /*LeanTween.scale$2:static start.*/
                scale$2: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, to, time, LeanTween.options().setCanvasScale().setRect$2(rectTrans));
                },
                /*LeanTween.scale$2:static end.*/

                /*LeanTween.scaleX:static start.*/
                scaleX: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setScaleX());
                },
                /*LeanTween.scaleX:static end.*/

                /*LeanTween.scaleY:static start.*/
                scaleY: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setScaleY());
                },
                /*LeanTween.scaleY:static end.*/

                /*LeanTween.scaleZ:static start.*/
                scaleZ: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setScaleZ());
                },
                /*LeanTween.scaleZ:static end.*/

                /*LeanTween.value$8:static start.*/
                value$8: function (gameObject, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setCallback().setFrom$1(new pc.Vec3( from, 0, 0 )));
                },
                /*LeanTween.value$8:static end.*/

                /*LeanTween.value:static start.*/
                value: function (from, to, time) {
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setCallback().setFrom$1(new pc.Vec3( from, 0, 0 )));
                },
                /*LeanTween.value:static end.*/

                /*LeanTween.value$10:static start.*/
                value$10: function (gameObject, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to.x, to.y, 0 ), time, LeanTween.options().setValue3().setTo$1(new pc.Vec3( to.x, to.y, 0.0 )).setFrom$1(new pc.Vec3( from.x, from.y, 0 )));
                },
                /*LeanTween.value$10:static end.*/

                /*LeanTween.value$11:static start.*/
                value$11: function (gameObject, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, to, time, LeanTween.options().setValue3().setFrom$1(from));
                },
                /*LeanTween.value$11:static end.*/

                /*LeanTween.value$9:static start.*/
                value$9: function (gameObject, from, to, time) {
                    var lt = LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, to.a, 0.0 ), time, LeanTween.options().setCallbackColor().setPoint(new pc.Vec3( to.r, to.g, to.b )).setFromColor(from).setHasInitialized(false));

                    var ren = gameObject.GetComponent(UnityEngine.SpriteRenderer);
                    lt.spriteRen = ren;
                    return lt;
                },
                /*LeanTween.value$9:static end.*/

                /*LeanTween.value$1:static start.*/
                value$1: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setCallback().setTo$1(new pc.Vec3( to, 0, 0 )).setFrom$1(new pc.Vec3( from, 0, 0 )).setOnUpdate(callOnUpdate));
                },
                /*LeanTween.value$1:static end.*/

                /*LeanTween.value$6:static start.*/
                value$6: function (gameObject, callOnUpdateRatio, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setCallback().setTo$1(new pc.Vec3( to, 0, 0 )).setFrom$1(new pc.Vec3( from, 0, 0 )).setOnUpdateRatio(callOnUpdateRatio));
                },
                /*LeanTween.value$6:static end.*/

                /*LeanTween.value$2:static start.*/
                value$2: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, to.a, 0.0 ), time, LeanTween.options().setCallbackColor().setPoint(new pc.Vec3( to.r, to.g, to.b )).setAxis(new pc.Vec3( from.r, from.g, from.b )).setFrom$1(new pc.Vec3( 0.0, from.a, 0.0 )).setHasInitialized(false).setOnUpdateColor(callOnUpdate));
                },
                /*LeanTween.value$2:static end.*/

                /*LeanTween.value$7:static start.*/
                value$7: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, to.a, 0.0 ), time, LeanTween.options().setCallbackColor().setPoint(new pc.Vec3( to.r, to.g, to.b )).setAxis(new pc.Vec3( from.r, from.g, from.b )).setFrom$1(new pc.Vec3( 0.0, from.a, 0.0 )).setHasInitialized(false).setOnUpdateColor$1(callOnUpdate));
                },
                /*LeanTween.value$7:static end.*/

                /*LeanTween.value$3:static start.*/
                value$3: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to.x, to.y, 0.0 ), time, LeanTween.options().setValue3().setTo$1(new pc.Vec3( to.x, to.y, 0.0 )).setFrom$1(new pc.Vec3( from.x, from.y, 0.0 )).setOnUpdateVector2(callOnUpdate));
                },
                /*LeanTween.value$3:static end.*/

                /*LeanTween.value$4:static start.*/
                value$4: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, to, time, LeanTween.options().setValue3().setTo$1(to).setFrom$1(from).setOnUpdateVector3(callOnUpdate));
                },
                /*LeanTween.value$4:static end.*/

                /*LeanTween.value$5:static start.*/
                value$5: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setCallback().setTo$1(new pc.Vec3( to, 0, 0 )).setFrom$1(new pc.Vec3( from, 0, 0 )).setOnUpdate$4(callOnUpdate, gameObject));
                },
                /*LeanTween.value$5:static end.*/

                /*LeanTween.delayedSound:static start.*/
                delayedSound: function (audio, pos, volume) {
                    //Debug.LogError("Delay sound??");
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, pos, 0.0, LeanTween.options().setDelayedSound().setTo$1(pos).setFrom$1(new pc.Vec3( volume, 0, 0 )).setAudio(audio));
                },
                /*LeanTween.delayedSound:static end.*/

                /*LeanTween.delayedSound$1:static start.*/
                delayedSound$1: function (gameObject, audio, pos, volume) {
                    //Debug.LogError("Delay sound??");
                    return LeanTween.pushNewTween(gameObject, pos, 0.0, LeanTween.options().setDelayedSound().setTo$1(pos).setFrom$1(new pc.Vec3( volume, 0, 0 )).setAudio(audio));
                },
                /*LeanTween.delayedSound$1:static end.*/

                /*LeanTween.size:static start.*/
                size: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, UnityEngine.Vector3.FromVector2(to), time, LeanTween.options().setCanvasSizeDelta().setRect$2(rectTrans));
                },
                /*LeanTween.size:static end.*/

                /*LeanTween.tweenOnCurve:static start.*/
                tweenOnCurve: function (tweenDescr, ratioPassed) {
                    // Debug.Log("single ratio:"+ratioPassed+" tweenDescr.animationCurve.Evaluate(ratioPassed):"+tweenDescr.animationCurve.Evaluate(ratioPassed));
                    return tweenDescr.from.x + (tweenDescr.diff.x) * tweenDescr.optional.animationCurve.value(ratioPassed);
                },
                /*LeanTween.tweenOnCurve:static end.*/

                /*LeanTween.tweenOnCurveVector:static start.*/
                tweenOnCurveVector: function (tweenDescr, ratioPassed) {
                    return new pc.Vec3( tweenDescr.from.x + (tweenDescr.diff.x) * tweenDescr.optional.animationCurve.value(ratioPassed), tweenDescr.from.y + (tweenDescr.diff.y) * tweenDescr.optional.animationCurve.value(ratioPassed), tweenDescr.from.z + (tweenDescr.diff.z) * tweenDescr.optional.animationCurve.value(ratioPassed) );
                },
                /*LeanTween.tweenOnCurveVector:static end.*/

                /*LeanTween.easeOutQuadOpt:static start.*/
                easeOutQuadOpt: function (start, diff, ratioPassed) {
                    return -diff * ratioPassed * (ratioPassed - 2) + start;
                },
                /*LeanTween.easeOutQuadOpt:static end.*/

                /*LeanTween.easeInQuadOpt:static start.*/
                easeInQuadOpt: function (start, diff, ratioPassed) {
                    return diff * ratioPassed * ratioPassed + start;
                },
                /*LeanTween.easeInQuadOpt:static end.*/

                /*LeanTween.easeInOutQuadOpt:static start.*/
                easeInOutQuadOpt: function (start, diff, ratioPassed) {
                    ratioPassed /= 0.5;
                    if (ratioPassed < 1) {
                        return diff / 2 * ratioPassed * ratioPassed + start;
                    }
                    ratioPassed--;
                    return -diff / 2 * (ratioPassed * (ratioPassed - 2) - 1) + start;
                },
                /*LeanTween.easeInOutQuadOpt:static end.*/

                /*LeanTween.easeInOutQuadOpt$1:static start.*/
                easeInOutQuadOpt$1: function (start, diff, ratioPassed) {
                    ratioPassed /= 0.5;
                    if (ratioPassed < 1) {
                        return diff.$clone().scale( 1.0 / ( 2 ) ).clone().scale( ratioPassed ).clone().scale( ratioPassed ).add( start );
                    }
                    ratioPassed--;
                    return diff.$clone().scale( -1 ).scale( 1.0 / ( 2 ) ).clone().scale( (ratioPassed * (ratioPassed - 2) - 1) ).add( start );
                },
                /*LeanTween.easeInOutQuadOpt$1:static end.*/

                /*LeanTween.linear:static start.*/
                linear: function (start, end, val) {
                    return pc.math.lerp(start, end, val);
                },
                /*LeanTween.linear:static end.*/

                /*LeanTween.clerp:static start.*/
                clerp: function (start, end, val) {
                    var min = 0.0;
                    var max = 360.0;
                    var half = Math.abs((max - min) / 2.0);
                    var retval = 0.0;
                    var diff = 0.0;
                    if ((end - start) < -half) {
                        diff = ((max - start) + end) * val;
                        retval = start + diff;
                    } else if ((end - start) > half) {
                        diff = -((max - end) + start) * val;
                        retval = start + diff;
                    } else {
                        retval = start + (end - start) * val;
                    }
                    return retval;
                },
                /*LeanTween.clerp:static end.*/

                /*LeanTween.spring:static start.*/
                spring: function (start, end, val) {
                    val = Math.max(0, Math.min(1, val));
                    val = (Math.sin(val * UnityEngine.Mathf.PI * (0.2 + 2.5 * val * val * val)) * Math.pow(1.0 - val, 2.2) + val) * (1.0 + (1.2 * (1.0 - val)));
                    return start + (end - start) * val;
                },
                /*LeanTween.spring:static end.*/

                /*LeanTween.easeInQuad:static start.*/
                easeInQuad: function (start, end, val) {
                    end -= start;
                    return end * val * val + start;
                },
                /*LeanTween.easeInQuad:static end.*/

                /*LeanTween.easeOutQuad:static start.*/
                easeOutQuad: function (start, end, val) {
                    end -= start;
                    return -end * val * (val - 2) + start;
                },
                /*LeanTween.easeOutQuad:static end.*/

                /*LeanTween.easeInOutQuad:static start.*/
                easeInOutQuad: function (start, end, val) {
                    val /= 0.5;
                    end -= start;
                    if (val < 1) {
                        return end / 2 * val * val + start;
                    }
                    val--;
                    return -end / 2 * (val * (val - 2) - 1) + start;
                },
                /*LeanTween.easeInOutQuad:static end.*/

                /*LeanTween.easeInOutQuadOpt2:static start.*/
                easeInOutQuadOpt2: function (start, diffBy2, val, val2) {
                    val /= 0.5;
                    if (val < 1) {
                        return diffBy2 * val2 + start;
                    }
                    val--;
                    return -diffBy2 * ((val2 - 2) - 1.0) + start;
                },
                /*LeanTween.easeInOutQuadOpt2:static end.*/

                /*LeanTween.easeInCubic:static start.*/
                easeInCubic: function (start, end, val) {
                    end -= start;
                    return end * val * val * val + start;
                },
                /*LeanTween.easeInCubic:static end.*/

                /*LeanTween.easeOutCubic:static start.*/
                easeOutCubic: function (start, end, val) {
                    val--;
                    end -= start;
                    return end * (val * val * val + 1) + start;
                },
                /*LeanTween.easeOutCubic:static end.*/

                /*LeanTween.easeInOutCubic:static start.*/
                easeInOutCubic: function (start, end, val) {
                    val /= 0.5;
                    end -= start;
                    if (val < 1) {
                        return end / 2 * val * val * val + start;
                    }
                    val -= 2;
                    return end / 2 * (val * val * val + 2) + start;
                },
                /*LeanTween.easeInOutCubic:static end.*/

                /*LeanTween.easeInQuart:static start.*/
                easeInQuart: function (start, end, val) {
                    end -= start;
                    return end * val * val * val * val + start;
                },
                /*LeanTween.easeInQuart:static end.*/

                /*LeanTween.easeOutQuart:static start.*/
                easeOutQuart: function (start, end, val) {
                    val--;
                    end -= start;
                    return -end * (val * val * val * val - 1) + start;
                },
                /*LeanTween.easeOutQuart:static end.*/

                /*LeanTween.easeInOutQuart:static start.*/
                easeInOutQuart: function (start, end, val) {
                    val /= 0.5;
                    end -= start;
                    if (val < 1) {
                        return end / 2 * val * val * val * val + start;
                    }
                    val -= 2;
                    return -end / 2 * (val * val * val * val - 2) + start;
                },
                /*LeanTween.easeInOutQuart:static end.*/

                /*LeanTween.easeInQuint:static start.*/
                easeInQuint: function (start, end, val) {
                    end -= start;
                    return end * val * val * val * val * val + start;
                },
                /*LeanTween.easeInQuint:static end.*/

                /*LeanTween.easeOutQuint:static start.*/
                easeOutQuint: function (start, end, val) {
                    val--;
                    end -= start;
                    return end * (val * val * val * val * val + 1) + start;
                },
                /*LeanTween.easeOutQuint:static end.*/

                /*LeanTween.easeInOutQuint:static start.*/
                easeInOutQuint: function (start, end, val) {
                    val /= 0.5;
                    end -= start;
                    if (val < 1) {
                        return end / 2 * val * val * val * val * val + start;
                    }
                    val -= 2;
                    return end / 2 * (val * val * val * val * val + 2) + start;
                },
                /*LeanTween.easeInOutQuint:static end.*/

                /*LeanTween.easeInSine:static start.*/
                easeInSine: function (start, end, val) {
                    end -= start;
                    return -end * Math.cos(val / 1 * (1.57079637)) + end + start;
                },
                /*LeanTween.easeInSine:static end.*/

                /*LeanTween.easeOutSine:static start.*/
                easeOutSine: function (start, end, val) {
                    end -= start;
                    return end * Math.sin(val / 1 * (1.57079637)) + start;
                },
                /*LeanTween.easeOutSine:static end.*/

                /*LeanTween.easeInOutSine:static start.*/
                easeInOutSine: function (start, end, val) {
                    end -= start;
                    return -end / 2 * (Math.cos(UnityEngine.Mathf.PI * val / 1) - 1) + start;
                },
                /*LeanTween.easeInOutSine:static end.*/

                /*LeanTween.easeInExpo:static start.*/
                easeInExpo: function (start, end, val) {
                    end -= start;
                    return end * Math.pow(2, 10 * (val / 1 - 1)) + start;
                },
                /*LeanTween.easeInExpo:static end.*/

                /*LeanTween.easeOutExpo:static start.*/
                easeOutExpo: function (start, end, val) {
                    end -= start;
                    return end * (-Math.pow(2, -10 * val / 1) + 1) + start;
                },
                /*LeanTween.easeOutExpo:static end.*/

                /*LeanTween.easeInOutExpo:static start.*/
                easeInOutExpo: function (start, end, val) {
                    val /= 0.5;
                    end -= start;
                    if (val < 1) {
                        return end / 2 * Math.pow(2, 10 * (val - 1)) + start;
                    }
                    val--;
                    return end / 2 * (-Math.pow(2, -10 * val) + 2) + start;
                },
                /*LeanTween.easeInOutExpo:static end.*/

                /*LeanTween.easeInCirc:static start.*/
                easeInCirc: function (start, end, val) {
                    end -= start;
                    return -end * (Math.sqrt(1 - val * val) - 1) + start;
                },
                /*LeanTween.easeInCirc:static end.*/

                /*LeanTween.easeOutCirc:static start.*/
                easeOutCirc: function (start, end, val) {
                    val--;
                    end -= start;
                    return end * Math.sqrt(1 - val * val) + start;
                },
                /*LeanTween.easeOutCirc:static end.*/

                /*LeanTween.easeInOutCirc:static start.*/
                easeInOutCirc: function (start, end, val) {
                    val /= 0.5;
                    end -= start;
                    if (val < 1) {
                        return -end / 2 * (Math.sqrt(1 - val * val) - 1) + start;
                    }
                    val -= 2;
                    return end / 2 * (Math.sqrt(1 - val * val) + 1) + start;
                },
                /*LeanTween.easeInOutCirc:static end.*/

                /*LeanTween.easeInBounce:static start.*/
                easeInBounce: function (start, end, val) {
                    end -= start;
                    var d = 1.0;
                    return end - LeanTween.easeOutBounce(0, end, d - val) + start;
                },
                /*LeanTween.easeInBounce:static end.*/

                /*LeanTween.easeOutBounce:static start.*/
                easeOutBounce: function (start, end, val) {
                    val /= 1.0;
                    end -= start;
                    if (val < (0.363636374)) {
                        return end * (7.5625 * val * val) + start;
                    } else if (val < (0.727272749)) {
                        val -= (0.545454562);
                        return end * (7.5625 * (val) * val + 0.75) + start;
                    } else if (val < (0.90909090909090906)) {
                        val -= (0.8181818);
                        return end * (7.5625 * (val) * val + 0.9375) + start;
                    } else {
                        val -= (0.954545438);
                        return end * (7.5625 * (val) * val + 0.984375) + start;
                    }
                },
                /*LeanTween.easeOutBounce:static end.*/

                /*LeanTween.easeInOutBounce:static start.*/
                easeInOutBounce: function (start, end, val) {
                    end -= start;
                    var d = 1.0;
                    if (val < d / 2) {
                        return LeanTween.easeInBounce(0, end, val * 2) * 0.5 + start;
                    } else {
                        return LeanTween.easeOutBounce(0, end, val * 2 - d) * 0.5 + end * 0.5 + start;
                    }
                },
                /*LeanTween.easeInOutBounce:static end.*/

                /*LeanTween.easeInBack:static start.*/
                easeInBack: function (start, end, val, overshoot) {
                    if (overshoot === void 0) { overshoot = 1.0; }
                    end -= start;
                    val /= 1;
                    var s = 1.70158 * overshoot;
                    return end * (val) * val * ((s + 1) * val - s) + start;
                },
                /*LeanTween.easeInBack:static end.*/

                /*LeanTween.easeOutBack:static start.*/
                easeOutBack: function (start, end, val, overshoot) {
                    if (overshoot === void 0) { overshoot = 1.0; }
                    var s = 1.70158 * overshoot;
                    end -= start;
                    val = (val / 1) - 1;
                    return end * ((val) * val * ((s + 1) * val + s) + 1) + start;
                },
                /*LeanTween.easeOutBack:static end.*/

                /*LeanTween.easeInOutBack:static start.*/
                easeInOutBack: function (start, end, val, overshoot) {
                    if (overshoot === void 0) { overshoot = 1.0; }
                    var s = 1.70158 * overshoot;
                    end -= start;
                    val /= 0.5;
                    if ((val) < 1) {
                        s *= (1.525) * overshoot;
                        return end / 2 * (val * val * (((s) + 1) * val - s)) + start;
                    }
                    val -= 2;
                    s *= (1.525) * overshoot;
                    return end / 2 * ((val) * val * (((s) + 1) * val + s) + 2) + start;
                },
                /*LeanTween.easeInOutBack:static end.*/

                /*LeanTween.easeInElastic:static start.*/
                easeInElastic: function (start, end, val, overshoot, period) {
                    if (overshoot === void 0) { overshoot = 1.0; }
                    if (period === void 0) { period = 0.3; }
                    end -= start;

                    var p = period;
                    var s = 0.0;
                    var a = 0.0;

                    if (val === 0.0) {
                        return start;
                    }

                    if (val === 1.0) {
                        return start + end;
                    }

                    if (a === 0.0 || a < Math.abs(end)) {
                        a = end;
                        s = p / 4.0;
                    } else {
                        s = p / (6.28318548) * Math.asin(end / a);
                    }

                    if (overshoot > 1.0 && val > 0.6) {
                        overshoot = 1.0 + ((1.0 - val) / 0.4 * (overshoot - 1.0));
                    }
                    // Debug.Log("ease in elastic val:"+val+" a:"+a+" overshoot:"+overshoot);

                    val = val - 1.0;
                    return start - (a * Math.pow(2.0, 10.0 * val) * Math.sin((val - s) * (6.28318548) / p)) * overshoot;
                },
                /*LeanTween.easeInElastic:static end.*/

                /*LeanTween.easeOutElastic:static start.*/
                easeOutElastic: function (start, end, val, overshoot, period) {
                    if (overshoot === void 0) { overshoot = 1.0; }
                    if (period === void 0) { period = 0.3; }
                    end -= start;

                    var p = period;
                    var s = 0.0;
                    var a = 0.0;

                    if (val === 0.0) {
                        return start;
                    }

                    // Debug.Log("ease out elastic val:"+val+" a:"+a);
                    if (val === 1.0) {
                        return start + end;
                    }

                    if (a === 0.0 || a < Math.abs(end)) {
                        a = end;
                        s = p / 4.0;
                    } else {
                        s = p / (6.28318548) * Math.asin(end / a);
                    }
                    if (overshoot > 1.0 && val < 0.4) {
                        overshoot = 1.0 + (val / 0.4 * (overshoot - 1.0));
                    }
                    // Debug.Log("ease out elastic val:"+val+" a:"+a+" overshoot:"+overshoot);

                    return start + end + a * Math.pow(2.0, -10.0 * val) * Math.sin((val - s) * (6.28318548) / p) * overshoot;
                },
                /*LeanTween.easeOutElastic:static end.*/

                /*LeanTween.easeInOutElastic:static start.*/
                easeInOutElastic: function (start, end, val, overshoot, period) {
                    if (overshoot === void 0) { overshoot = 1.0; }
                    if (period === void 0) { period = 0.3; }
                    end -= start;

                    var p = period;
                    var s = 0.0;
                    var a = 0.0;

                    if (val === 0.0) {
                        return start;
                    }

                    val = val / (0.5);
                    if (val === 2.0) {
                        return start + end;
                    }

                    if (a === 0.0 || a < Math.abs(end)) {
                        a = end;
                        s = p / 4.0;
                    } else {
                        s = p / (6.28318548) * Math.asin(end / a);
                    }

                    if (overshoot > 1.0) {
                        if (val < 0.2) {
                            overshoot = 1.0 + (val / 0.2 * (overshoot - 1.0));
                        } else if (val > 0.8) {
                            overshoot = 1.0 + ((1.0 - val) / 0.2 * (overshoot - 1.0));
                        }
                    }

                    if (val < 1.0) {
                        val = val - 1.0;
                        return start - 0.5 * (a * Math.pow(2.0, 10.0 * val) * Math.sin((val - s) * (6.28318548) / p)) * overshoot;
                    }
                    val = val - 1.0;
                    return end + start + a * Math.pow(2.0, -10.0 * val) * Math.sin((val - s) * (6.28318548) / p) * 0.5 * overshoot;
                },
                /*LeanTween.easeInOutElastic:static end.*/

                /*LeanTween.followDamp:static start.*/
                followDamp: function (trans, target, prop, smoothTime, maxSpeed) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    var d = LeanTween.pushNewTween(trans.gameObject, pc.Vec3.ZERO.clone(), 3.40282347E+38, LeanTween.options().setFollow().setTarget(target));

                    switch (prop) {
                        case LeanProp.localPosition: 
                            d.optional.axis = d.trans.localPosition.$clone();
                            d.easeInternal = function () {
                                d.optional.axis = LeanSmooth.damp$2(d.optional.axis, d.toTrans.localPosition, Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime);
                                d.trans.localPosition = d.optional.axis.$clone().add( d.toInternal );
                            };
                            break;
                        case LeanProp.position: 
                            d.diff = d.trans.position.$clone();
                            d.easeInternal = function () {
                                d.optional.axis = LeanSmooth.damp$2(d.optional.axis, d.toTrans.position, Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime);
                                d.trans.position = d.optional.axis.$clone().add( d.toInternal );
                            };
                            break;
                        case LeanProp.localX: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosX(d.trans, LeanSmooth.damp(d.trans.localPosition.x, d.toTrans.localPosition.x, Bridge.ref(d.fromInternal, "x"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime));
                            };
                            break;
                        case LeanProp.localY: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosY(d.trans, LeanSmooth.damp(d.trans.localPosition.y, d.toTrans.localPosition.y, Bridge.ref(d.fromInternal, "y"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime));
                            };
                            break;
                        case LeanProp.localZ: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosZ(d.trans, LeanSmooth.damp(d.trans.localPosition.z, d.toTrans.localPosition.z, Bridge.ref(d.fromInternal, "z"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime));
                            };
                            break;
                        case LeanProp.x: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosX(d.trans, LeanSmooth.damp(d.trans.position.x, d.toTrans.position.x, Bridge.ref(d.fromInternal, "x"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime));
                            };
                            break;
                        case LeanProp.y: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosY(d.trans, LeanSmooth.damp(d.trans.position.y, d.toTrans.position.y, Bridge.ref(d.fromInternal, "y"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime));
                            };
                            break;
                        case LeanProp.z: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosZ(d.trans, LeanSmooth.damp(d.trans.position.z, d.toTrans.position.z, Bridge.ref(d.fromInternal, "z"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime));
                            };
                            break;
                        case LeanProp.scale: 
                            d.easeInternal = function () {
                                d.trans.localScale = LeanSmooth.damp$2(d.trans.localScale, d.toTrans.localScale, Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime);
                            };
                            break;
                        case LeanProp.color: 
                            d.easeInternal = function () {
                                var col = LeanSmooth.damp$1(LeanTweenExt.LeanColor$1(d.trans), LeanTweenExt.LeanColor$1(d.toTrans), Bridge.ref(d.optional, "color"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime);
                                d.trans.GetComponent(UnityEngine.Renderer).material.color = col.$clone();
                            };
                            break;
                    }

                    return d;
                },
                /*LeanTween.followDamp:static end.*/

                /*LeanTween.followSpring:static start.*/
                followSpring: function (trans, target, prop, smoothTime, maxSpeed, friction, accelRate) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (friction === void 0) { friction = 2.0; }
                    if (accelRate === void 0) { accelRate = 0.5; }
                    var d = LeanTween.pushNewTween(trans.gameObject, pc.Vec3.ZERO.clone(), 3.40282347E+38, LeanTween.options().setFollow().setTarget(target));
                    switch (prop) {
                        case LeanProp.localPosition: 
                            d.optional.axis = d.trans.localPosition.$clone();
                            d.easeInternal = function () {
                                d.optional.axis = LeanSmooth.spring$2(d.optional.axis, d.toTrans.localPosition, Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate);
                                d.trans.localPosition = d.optional.axis.$clone().add( d.toInternal );
                            };
                            break;
                        case LeanProp.position: 
                            d.diff = d.trans.position.$clone();
                            d.easeInternal = function () {
                                d.diff = LeanSmooth.spring$2(d.diff, d.toTrans.position, Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate);
                                d.trans.position = d.diff.$clone(); // + d.toInternal;
                            };
                            break;
                        case LeanProp.localX: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosX(d.trans, LeanSmooth.spring(d.trans.localPosition.x, d.toTrans.localPosition.x, Bridge.ref(d.fromInternal, "x"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate));
                            };
                            break;
                        case LeanProp.localY: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosY(d.trans, LeanSmooth.spring(d.trans.localPosition.y, d.toTrans.localPosition.y, Bridge.ref(d.fromInternal, "y"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate));
                            };
                            break;
                        case LeanProp.localZ: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosZ(d.trans, LeanSmooth.spring(d.trans.localPosition.z, d.toTrans.localPosition.z, Bridge.ref(d.fromInternal, "z"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate));
                            };
                            break;
                        case LeanProp.x: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosX(d.trans, LeanSmooth.spring(d.trans.position.x, d.toTrans.position.x, Bridge.ref(d.fromInternal, "x"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate));
                            };
                            break;
                        case LeanProp.y: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosY(d.trans, LeanSmooth.spring(d.trans.position.y, d.toTrans.position.y, Bridge.ref(d.fromInternal, "y"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate));
                            };
                            break;
                        case LeanProp.z: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosZ(d.trans, LeanSmooth.spring(d.trans.position.z, d.toTrans.position.z, Bridge.ref(d.fromInternal, "z"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate));
                            };
                            break;
                        case LeanProp.scale: 
                            d.easeInternal = function () {
                                d.trans.localScale = LeanSmooth.spring$2(d.trans.localScale, d.toTrans.localScale, Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate);
                            };
                            break;
                        case LeanProp.color: 
                            d.easeInternal = function () {
                                var col = LeanSmooth.spring$1(LeanTweenExt.LeanColor$1(d.trans), LeanTweenExt.LeanColor$1(d.toTrans), Bridge.ref(d.optional, "color"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate);
                                d.trans.GetComponent(UnityEngine.Renderer).material.color = col.$clone();
                            };
                            break;
                    }

                    return d;
                },
                /*LeanTween.followSpring:static end.*/

                /*LeanTween.followBounceOut:static start.*/
                followBounceOut: function (trans, target, prop, smoothTime, maxSpeed, friction, accelRate, hitDamping) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (friction === void 0) { friction = 2.0; }
                    if (accelRate === void 0) { accelRate = 0.5; }
                    if (hitDamping === void 0) { hitDamping = 0.9; }
                    var d = LeanTween.pushNewTween(trans.gameObject, pc.Vec3.ZERO.clone(), 3.40282347E+38, LeanTween.options().setFollow().setTarget(target));
                    switch (prop) {
                        case LeanProp.localPosition: 
                            d.optional.axis = d.trans.localPosition.$clone();
                            d.easeInternal = function () {
                                d.optional.axis = LeanSmooth.bounceOut$2(d.optional.axis, d.toTrans.localPosition, Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping);
                                d.trans.localPosition = d.optional.axis.$clone().add( d.toInternal );
                            };
                            break;
                        case LeanProp.position: 
                            d.easeInternal = function () {
                                d.optional.axis = LeanSmooth.bounceOut$2(d.optional.axis, d.toTrans.position, Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping);
                                d.trans.position = d.optional.axis.$clone().add( d.toInternal );
                            };
                            break;
                        case LeanProp.localX: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosX(d.trans, LeanSmooth.bounceOut(d.trans.localPosition.x, d.toTrans.localPosition.x, Bridge.ref(d.fromInternal, "x"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping));
                            };
                            break;
                        case LeanProp.localY: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosY(d.trans, LeanSmooth.bounceOut(d.trans.localPosition.y, d.toTrans.localPosition.y, Bridge.ref(d.fromInternal, "y"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping));
                            };
                            break;
                        case LeanProp.localZ: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosZ(d.trans, LeanSmooth.bounceOut(d.trans.localPosition.z, d.toTrans.localPosition.z, Bridge.ref(d.fromInternal, "z"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping));
                            };
                            break;
                        case LeanProp.x: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosX(d.trans, LeanSmooth.bounceOut(d.trans.position.x, d.toTrans.position.x, Bridge.ref(d.fromInternal, "x"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping));
                            };
                            break;
                        case LeanProp.y: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosY(d.trans, LeanSmooth.bounceOut(d.trans.position.y, d.toTrans.position.y, Bridge.ref(d.fromInternal, "y"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping));
                            };
                            break;
                        case LeanProp.z: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosZ(d.trans, LeanSmooth.bounceOut(d.trans.position.z, d.toTrans.position.z, Bridge.ref(d.fromInternal, "z"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping));
                            };
                            break;
                        case LeanProp.scale: 
                            d.easeInternal = function () {
                                d.trans.localScale = LeanSmooth.bounceOut$2(d.trans.localScale, d.toTrans.localScale, Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping);
                            };
                            break;
                        case LeanProp.color: 
                            d.easeInternal = function () {
                                var col = LeanSmooth.bounceOut$1(LeanTweenExt.LeanColor$1(d.trans), LeanTweenExt.LeanColor$1(d.toTrans), Bridge.ref(d.optional, "color"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping);
                                d.trans.GetComponent(UnityEngine.Renderer).material.color = col.$clone();
                            };
                            break;
                    }

                    return d;
                },
                /*LeanTween.followBounceOut:static end.*/

                /*LeanTween.followLinear:static start.*/
                followLinear: function (trans, target, prop, moveSpeed) {
                    var d = LeanTween.pushNewTween(trans.gameObject, pc.Vec3.ZERO.clone(), 3.40282347E+38, LeanTween.options().setFollow().setTarget(target));
                    switch (prop) {
                        case LeanProp.localPosition: 
                            d.optional.axis = d.trans.localPosition.$clone();
                            d.easeInternal = function () {
                                d.optional.axis = LeanSmooth.linear$2(d.optional.axis, d.toTrans.localPosition, moveSpeed);
                                d.trans.localPosition = d.optional.axis.$clone().add( d.toInternal );
                            };
                            break;
                        case LeanProp.position: 
                            d.easeInternal = function () {
                                d.trans.position = LeanSmooth.linear$2(d.trans.position, d.toTrans.position, moveSpeed);
                            };
                            break;
                        case LeanProp.localX: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosX(d.trans, LeanSmooth.linear(d.trans.localPosition.x, d.toTrans.localPosition.x, moveSpeed));
                            };
                            break;
                        case LeanProp.localY: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosY(d.trans, LeanSmooth.linear(d.trans.localPosition.y, d.toTrans.localPosition.y, moveSpeed));
                            };
                            break;
                        case LeanProp.localZ: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosZ(d.trans, LeanSmooth.linear(d.trans.localPosition.z, d.toTrans.localPosition.z, moveSpeed));
                            };
                            break;
                        case LeanProp.x: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosX(d.trans, LeanSmooth.linear(d.trans.position.x, d.toTrans.position.x, moveSpeed));
                            };
                            break;
                        case LeanProp.y: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosY(d.trans, LeanSmooth.linear(d.trans.position.y, d.toTrans.position.y, moveSpeed));
                            };
                            break;
                        case LeanProp.z: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosZ(d.trans, LeanSmooth.linear(d.trans.position.z, d.toTrans.position.z, moveSpeed));
                            };
                            break;
                        case LeanProp.scale: 
                            d.easeInternal = function () {
                                d.trans.localScale = LeanSmooth.linear$2(d.trans.localScale, d.toTrans.localScale, moveSpeed);
                            };
                            break;
                        case LeanProp.color: 
                            d.easeInternal = function () {
                                var col = LeanSmooth.linear$1(LeanTweenExt.LeanColor$1(d.trans), LeanTweenExt.LeanColor$1(d.toTrans), moveSpeed);
                                d.trans.GetComponent(UnityEngine.Renderer).material.color = col.$clone();
                            };
                            break;
                    }

                    return d;
                },
                /*LeanTween.followLinear:static end.*/

                /*LeanTween.addListener:static start.*/
                addListener: function (eventId, callback) {
                    LeanTween.addListener$1(LeanTween.tweenEmpty, eventId, callback);
                },
                /*LeanTween.addListener:static end.*/

                /*LeanTween.addListener$1:static start.*/
                addListener$1: function (caller, eventId, callback) {
                    if (LeanTween.eventListeners == null) {
                        LeanTween.INIT_LISTENERS_MAX = LeanTween.LISTENERS_MAX;
                        LeanTween.eventListeners = System.Array.init(Bridge.Int.mul(LeanTween.EVENTS_MAX, LeanTween.LISTENERS_MAX), null, Function);
                        LeanTween.goListeners = System.Array.init(Bridge.Int.mul(LeanTween.EVENTS_MAX, LeanTween.LISTENERS_MAX), null, UnityEngine.GameObject);
                    }
                    // Debug.Log("searching for an empty space for:"+caller + " eventid:"+event);
                    for (LeanTween.i = 0; LeanTween.i < LeanTween.INIT_LISTENERS_MAX; LeanTween.i = (LeanTween.i + 1) | 0) {
                        var point = (Bridge.Int.mul(eventId, LeanTween.INIT_LISTENERS_MAX) + LeanTween.i) | 0;
                        if (UnityEngine.GameObject.op_Equality(LeanTween.goListeners[point], null) || Bridge.staticEquals(LeanTween.eventListeners[point], null)) {
                            LeanTween.eventListeners[point] = callback;
                            LeanTween.goListeners[point] = caller;
                            if (LeanTween.i >= LeanTween.eventsMaxSearch) {
                                LeanTween.eventsMaxSearch = (LeanTween.i + 1) | 0;
                            }
                            // Debug.Log("adding event for:"+caller.name);

                            return;
                        }
                        if (UnityEngine.GameObject.op_Equality(LeanTween.goListeners[point], caller) && Bridge.equals(LeanTween.eventListeners[point], callback)) {
                            // Debug.Log("This event is already being listened for.");
                            return;
                        }
                    }
                    UnityEngine.Debug.LogError$2("You ran out of areas to add listeners, consider increasing LISTENERS_MAX, ex: LeanTween.LISTENERS_MAX = " + (Bridge.Int.mul(LeanTween.LISTENERS_MAX, 2)));
                },
                /*LeanTween.addListener$1:static end.*/

                /*LeanTween.removeListener$1:static start.*/
                removeListener$1: function (eventId, callback) {
                    return LeanTween.removeListener$2(LeanTween.tweenEmpty, eventId, callback);
                },
                /*LeanTween.removeListener$1:static end.*/

                /*LeanTween.removeListener:static start.*/
                removeListener: function (eventId) {
                    var point = (Bridge.Int.mul(eventId, LeanTween.INIT_LISTENERS_MAX) + LeanTween.i) | 0;
                    LeanTween.eventListeners[point] = null;
                    LeanTween.goListeners[point] = null;
                    return true;
                },
                /*LeanTween.removeListener:static end.*/

                /*LeanTween.removeListener$2:static start.*/
                removeListener$2: function (caller, eventId, callback) {
                    for (LeanTween.i = 0; LeanTween.i < LeanTween.eventsMaxSearch; LeanTween.i = (LeanTween.i + 1) | 0) {
                        var point = (Bridge.Int.mul(eventId, LeanTween.INIT_LISTENERS_MAX) + LeanTween.i) | 0;
                        if (UnityEngine.GameObject.op_Equality(LeanTween.goListeners[point], caller) && Bridge.equals(LeanTween.eventListeners[point], callback)) {
                            LeanTween.eventListeners[point] = null;
                            LeanTween.goListeners[point] = null;
                            return true;
                        }
                    }
                    return false;
                },
                /*LeanTween.removeListener$2:static end.*/

                /*LeanTween.dispatchEvent:static start.*/
                dispatchEvent: function (eventId) {
                    LeanTween.dispatchEvent$1(eventId, null);
                },
                /*LeanTween.dispatchEvent:static end.*/

                /*LeanTween.dispatchEvent$1:static start.*/
                dispatchEvent$1: function (eventId, data) {
                    for (var k = 0; k < LeanTween.eventsMaxSearch; k = (k + 1) | 0) {
                        var point = (Bridge.Int.mul(eventId, LeanTween.INIT_LISTENERS_MAX) + k) | 0;
                        if (!Bridge.staticEquals(LeanTween.eventListeners[point], null)) {
                            if (UnityEngine.Object.op_Implicit(LeanTween.goListeners[point])) {
                                LeanTween.eventListeners[point](new LTEvent(eventId, data));
                            } else {
                                LeanTween.eventListeners[point] = null;
                            }
                        }
                    }
                },
                /*LeanTween.dispatchEvent$1:static end.*/


            }
        },
        methods: {
            /*LeanTween.Update start.*/
            Update: function () {
                LeanTween.update();
            },
            /*LeanTween.Update end.*/


        }
    });
    /*LeanTween end.*/

    /*LeanTweenExt start.*/
    Bridge.define("LeanTweenExt", {
        statics: {
            methods: {
                /*LeanTweenExt.LeanAlpha$1:static start.*/
                LeanAlpha$1: function (gameObject, to, time) {
                    return LeanTween.alpha$1(gameObject, to, time);
                },
                /*LeanTweenExt.LeanAlpha$1:static end.*/

                /*LeanTweenExt.LeanAlpha$2:static start.*/
                LeanAlpha$2: function (rectTransform, to, time) {
                    return LeanTween.alpha$2(rectTransform, to, time);
                },
                /*LeanTweenExt.LeanAlpha$2:static end.*/

                /*LeanTweenExt.LeanAlpha:static start.*/
                LeanAlpha: function (canvas, to, time) {
                    return LeanTween.alphaCanvas(canvas, to, time);
                },
                /*LeanTweenExt.LeanAlpha:static end.*/

                /*LeanTweenExt.LeanAlphaVertex:static start.*/
                LeanAlphaVertex: function (gameObject, to, time) {
                    return LeanTween.alphaVertex(gameObject, to, time);
                },
                /*LeanTweenExt.LeanAlphaVertex:static end.*/

                /*LeanTweenExt.LeanAlphaText:static start.*/
                LeanAlphaText: function (rectTransform, to, time) {
                    return LeanTween.alphaText(rectTransform, to, time);
                },
                /*LeanTweenExt.LeanAlphaText:static end.*/

                /*LeanTweenExt.LeanCancel:static start.*/
                LeanCancel: function (gameObject) {
                    LeanTween.cancel$3(gameObject);
                },
                /*LeanTweenExt.LeanCancel:static end.*/

                /*LeanTweenExt.LeanCancel$1:static start.*/
                LeanCancel$1: function (gameObject, callOnComplete) {
                    LeanTween.cancel$4(gameObject, callOnComplete);
                },
                /*LeanTweenExt.LeanCancel$1:static end.*/

                /*LeanTweenExt.LeanCancel$2:static start.*/
                LeanCancel$2: function (gameObject, uniqueId, callOnComplete) {
                    if (callOnComplete === void 0) { callOnComplete = false; }
                    LeanTween.cancel$5(gameObject, uniqueId, callOnComplete);
                },
                /*LeanTweenExt.LeanCancel$2:static end.*/

                /*LeanTweenExt.LeanCancel$3:static start.*/
                LeanCancel$3: function (rectTransform) {
                    LeanTween.cancel$6(rectTransform);
                },
                /*LeanTweenExt.LeanCancel$3:static end.*/

                /*LeanTweenExt.LeanColor:static start.*/
                LeanColor: function (gameObject, to, time) {
                    return LeanTween.color(gameObject, to, time);
                },
                /*LeanTweenExt.LeanColor:static end.*/

                /*LeanTweenExt.LeanColor$1:static start.*/
                LeanColor$1: function (transform) {
                    return transform.GetComponent(UnityEngine.Renderer).material.color.$clone();
                },
                /*LeanTweenExt.LeanColor$1:static end.*/

                /*LeanTweenExt.LeanColorText:static start.*/
                LeanColorText: function (rectTransform, to, time) {
                    return LeanTween.colorText(rectTransform, to, time);
                },
                /*LeanTweenExt.LeanColorText:static end.*/

                /*LeanTweenExt.LeanDelayedCall:static start.*/
                LeanDelayedCall: function (gameObject, delayTime, callback) {
                    return LeanTween.delayedCall$2(gameObject, delayTime, callback);
                },
                /*LeanTweenExt.LeanDelayedCall:static end.*/

                /*LeanTweenExt.LeanDelayedCall$1:static start.*/
                LeanDelayedCall$1: function (gameObject, delayTime, callback) {
                    return LeanTween.delayedCall$3(gameObject, delayTime, callback);
                },
                /*LeanTweenExt.LeanDelayedCall$1:static end.*/

                /*LeanTweenExt.LeanIsPaused:static start.*/
                LeanIsPaused: function (gameObject) {
                    return LeanTween.isPaused$1(gameObject);
                },
                /*LeanTweenExt.LeanIsPaused:static end.*/

                /*LeanTweenExt.LeanIsPaused$1:static start.*/
                LeanIsPaused$1: function (rectTransform) {
                    return LeanTween.isPaused$2(rectTransform);
                },
                /*LeanTweenExt.LeanIsPaused$1:static end.*/

                /*LeanTweenExt.LeanIsTweening:static start.*/
                LeanIsTweening: function (gameObject) {
                    return LeanTween.isTweening$2(gameObject);
                },
                /*LeanTweenExt.LeanIsTweening:static end.*/

                /*LeanTweenExt.LeanMove$3:static start.*/
                LeanMove$3: function (gameObject, to, time) {
                    return LeanTween.move$5(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMove$3:static end.*/

                /*LeanTweenExt.LeanMove$9:static start.*/
                LeanMove$9: function (transform, to, time) {
                    return LeanTween.move$5(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMove$9:static end.*/

                /*LeanTweenExt.LeanMove$5:static start.*/
                LeanMove$5: function (rectTransform, to, time) {
                    return LeanTween.move$7(rectTransform, to, time);
                },
                /*LeanTweenExt.LeanMove$5:static end.*/

                /*LeanTweenExt.LeanMove$2:static start.*/
                LeanMove$2: function (gameObject, to, time) {
                    return LeanTween.move$4(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMove$2:static end.*/

                /*LeanTweenExt.LeanMove$8:static start.*/
                LeanMove$8: function (transform, to, time) {
                    return LeanTween.move$4(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMove$8:static end.*/

                /*LeanTweenExt.LeanMove$4:static start.*/
                LeanMove$4: function (gameObject, to, time) {
                    return LeanTween.move$6(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMove$4:static end.*/

                /*LeanTweenExt.LeanMove:static start.*/
                LeanMove: function (gameObject, to, time) {
                    return LeanTween.move$1(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMove:static end.*/

                /*LeanTweenExt.LeanMove$1:static start.*/
                LeanMove$1: function (gameObject, to, time) {
                    return LeanTween.move$2(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMove$1:static end.*/

                /*LeanTweenExt.LeanMove$10:static start.*/
                LeanMove$10: function (transform, to, time) {
                    return LeanTween.move$6(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMove$10:static end.*/

                /*LeanTweenExt.LeanMove$6:static start.*/
                LeanMove$6: function (transform, to, time) {
                    return LeanTween.move$1(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMove$6:static end.*/

                /*LeanTweenExt.LeanMove$7:static start.*/
                LeanMove$7: function (transform, to, time) {
                    return LeanTween.move$2(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMove$7:static end.*/

                /*LeanTweenExt.LeanMoveLocal$2:static start.*/
                LeanMoveLocal$2: function (gameObject, to, time) {
                    return LeanTween.moveLocal$2(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocal$2:static end.*/

                /*LeanTweenExt.LeanMoveLocal:static start.*/
                LeanMoveLocal: function (gameObject, to, time) {
                    return LeanTween.moveLocal(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocal:static end.*/

                /*LeanTweenExt.LeanMoveLocal$1:static start.*/
                LeanMoveLocal$1: function (gameObject, to, time) {
                    return LeanTween.moveLocal$1(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocal$1:static end.*/

                /*LeanTweenExt.LeanMoveLocal$5:static start.*/
                LeanMoveLocal$5: function (transform, to, time) {
                    return LeanTween.moveLocal$2(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocal$5:static end.*/

                /*LeanTweenExt.LeanMoveLocal$3:static start.*/
                LeanMoveLocal$3: function (transform, to, time) {
                    return LeanTween.moveLocal(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocal$3:static end.*/

                /*LeanTweenExt.LeanMoveLocal$4:static start.*/
                LeanMoveLocal$4: function (transform, to, time) {
                    return LeanTween.moveLocal$1(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocal$4:static end.*/

                /*LeanTweenExt.LeanMoveLocalX:static start.*/
                LeanMoveLocalX: function (gameObject, to, time) {
                    return LeanTween.moveLocalX(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocalX:static end.*/

                /*LeanTweenExt.LeanMoveLocalX$1:static start.*/
                LeanMoveLocalX$1: function (transform, to, time) {
                    return LeanTween.moveLocalX(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocalX$1:static end.*/

                /*LeanTweenExt.LeanMoveLocalY:static start.*/
                LeanMoveLocalY: function (gameObject, to, time) {
                    return LeanTween.moveLocalY(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocalY:static end.*/

                /*LeanTweenExt.LeanMoveLocalY$1:static start.*/
                LeanMoveLocalY$1: function (transform, to, time) {
                    return LeanTween.moveLocalY(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocalY$1:static end.*/

                /*LeanTweenExt.LeanMoveLocalZ:static start.*/
                LeanMoveLocalZ: function (gameObject, to, time) {
                    return LeanTween.moveLocalZ(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocalZ:static end.*/

                /*LeanTweenExt.LeanMoveLocalZ$1:static start.*/
                LeanMoveLocalZ$1: function (transform, to, time) {
                    return LeanTween.moveLocalZ(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocalZ$1:static end.*/

                /*LeanTweenExt.LeanMoveSpline$1:static start.*/
                LeanMoveSpline$1: function (gameObject, to, time) {
                    return LeanTween.moveSpline$1(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveSpline$1:static end.*/

                /*LeanTweenExt.LeanMoveSpline:static start.*/
                LeanMoveSpline: function (gameObject, to, time) {
                    return LeanTween.moveSpline(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveSpline:static end.*/

                /*LeanTweenExt.LeanMoveSpline$3:static start.*/
                LeanMoveSpline$3: function (transform, to, time) {
                    return LeanTween.moveSpline$1(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveSpline$3:static end.*/

                /*LeanTweenExt.LeanMoveSpline$2:static start.*/
                LeanMoveSpline$2: function (transform, to, time) {
                    return LeanTween.moveSpline(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveSpline$2:static end.*/

                /*LeanTweenExt.LeanMoveSplineLocal:static start.*/
                LeanMoveSplineLocal: function (gameObject, to, time) {
                    return LeanTween.moveSplineLocal(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveSplineLocal:static end.*/

                /*LeanTweenExt.LeanMoveSplineLocal$1:static start.*/
                LeanMoveSplineLocal$1: function (transform, to, time) {
                    return LeanTween.moveSplineLocal(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveSplineLocal$1:static end.*/

                /*LeanTweenExt.LeanMoveX:static start.*/
                LeanMoveX: function (gameObject, to, time) {
                    return LeanTween.moveX(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveX:static end.*/

                /*LeanTweenExt.LeanMoveX$2:static start.*/
                LeanMoveX$2: function (transform, to, time) {
                    return LeanTween.moveX(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveX$2:static end.*/

                /*LeanTweenExt.LeanMoveX$1:static start.*/
                LeanMoveX$1: function (rectTransform, to, time) {
                    return LeanTween.moveX$1(rectTransform, to, time);
                },
                /*LeanTweenExt.LeanMoveX$1:static end.*/

                /*LeanTweenExt.LeanMoveY:static start.*/
                LeanMoveY: function (gameObject, to, time) {
                    return LeanTween.moveY(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveY:static end.*/

                /*LeanTweenExt.LeanMoveY$2:static start.*/
                LeanMoveY$2: function (transform, to, time) {
                    return LeanTween.moveY(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveY$2:static end.*/

                /*LeanTweenExt.LeanMoveY$1:static start.*/
                LeanMoveY$1: function (rectTransform, to, time) {
                    return LeanTween.moveY$1(rectTransform, to, time);
                },
                /*LeanTweenExt.LeanMoveY$1:static end.*/

                /*LeanTweenExt.LeanMoveZ:static start.*/
                LeanMoveZ: function (gameObject, to, time) {
                    return LeanTween.moveZ(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveZ:static end.*/

                /*LeanTweenExt.LeanMoveZ$2:static start.*/
                LeanMoveZ$2: function (transform, to, time) {
                    return LeanTween.moveZ(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveZ$2:static end.*/

                /*LeanTweenExt.LeanMoveZ$1:static start.*/
                LeanMoveZ$1: function (rectTransform, to, time) {
                    return LeanTween.moveZ$1(rectTransform, to, time);
                },
                /*LeanTweenExt.LeanMoveZ$1:static end.*/

                /*LeanTweenExt.LeanPause:static start.*/
                LeanPause: function (gameObject) {
                    LeanTween.pause$1(gameObject);
                },
                /*LeanTweenExt.LeanPause:static end.*/

                /*LeanTweenExt.LeanPlay:static start.*/
                LeanPlay: function (rectTransform, sprites) {
                    return LeanTween.play(rectTransform, sprites);
                },
                /*LeanTweenExt.LeanPlay:static end.*/

                /*LeanTweenExt.LeanResume:static start.*/
                LeanResume: function (gameObject) {
                    LeanTween.resume$1(gameObject);
                },
                /*LeanTweenExt.LeanResume:static end.*/

                /*LeanTweenExt.LeanRotate:static start.*/
                LeanRotate: function (gameObject, to, time) {
                    return LeanTween.rotate$1(gameObject, to, time);
                },
                /*LeanTweenExt.LeanRotate:static end.*/

                /*LeanTweenExt.LeanRotate$2:static start.*/
                LeanRotate$2: function (transform, to, time) {
                    return LeanTween.rotate$1(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanRotate$2:static end.*/

                /*LeanTweenExt.LeanRotate$1:static start.*/
                LeanRotate$1: function (rectTransform, to, time) {
                    return LeanTween.rotate$3(rectTransform, to, time);
                },
                /*LeanTweenExt.LeanRotate$1:static end.*/

                /*LeanTweenExt.LeanRotateAround:static start.*/
                LeanRotateAround: function (gameObject, axis, add, time) {
                    return LeanTween.rotateAround(gameObject, axis, add, time);
                },
                /*LeanTweenExt.LeanRotateAround:static end.*/

                /*LeanTweenExt.LeanRotateAround$2:static start.*/
                LeanRotateAround$2: function (transform, axis, add, time) {
                    return LeanTween.rotateAround(transform.gameObject, axis, add, time);
                },
                /*LeanTweenExt.LeanRotateAround$2:static end.*/

                /*LeanTweenExt.LeanRotateAround$1:static start.*/
                LeanRotateAround$1: function (rectTransform, axis, add, time) {
                    return LeanTween.rotateAround$1(rectTransform, axis, add, time);
                },
                /*LeanTweenExt.LeanRotateAround$1:static end.*/

                /*LeanTweenExt.LeanRotateAroundLocal:static start.*/
                LeanRotateAroundLocal: function (gameObject, axis, add, time) {
                    return LeanTween.rotateAroundLocal(gameObject, axis, add, time);
                },
                /*LeanTweenExt.LeanRotateAroundLocal:static end.*/

                /*LeanTweenExt.LeanRotateAroundLocal$2:static start.*/
                LeanRotateAroundLocal$2: function (transform, axis, add, time) {
                    return LeanTween.rotateAroundLocal(transform.gameObject, axis, add, time);
                },
                /*LeanTweenExt.LeanRotateAroundLocal$2:static end.*/

                /*LeanTweenExt.LeanRotateAroundLocal$1:static start.*/
                LeanRotateAroundLocal$1: function (rectTransform, axis, add, time) {
                    return LeanTween.rotateAroundLocal$1(rectTransform, axis, add, time);
                },
                /*LeanTweenExt.LeanRotateAroundLocal$1:static end.*/

                /*LeanTweenExt.LeanRotateX:static start.*/
                LeanRotateX: function (gameObject, to, time) {
                    return LeanTween.rotateX(gameObject, to, time);
                },
                /*LeanTweenExt.LeanRotateX:static end.*/

                /*LeanTweenExt.LeanRotateX$1:static start.*/
                LeanRotateX$1: function (transform, to, time) {
                    return LeanTween.rotateX(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanRotateX$1:static end.*/

                /*LeanTweenExt.LeanRotateY:static start.*/
                LeanRotateY: function (gameObject, to, time) {
                    return LeanTween.rotateY(gameObject, to, time);
                },
                /*LeanTweenExt.LeanRotateY:static end.*/

                /*LeanTweenExt.LeanRotateY$1:static start.*/
                LeanRotateY$1: function (transform, to, time) {
                    return LeanTween.rotateY(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanRotateY$1:static end.*/

                /*LeanTweenExt.LeanRotateZ:static start.*/
                LeanRotateZ: function (gameObject, to, time) {
                    return LeanTween.rotateZ(gameObject, to, time);
                },
                /*LeanTweenExt.LeanRotateZ:static end.*/

                /*LeanTweenExt.LeanRotateZ$1:static start.*/
                LeanRotateZ$1: function (transform, to, time) {
                    return LeanTween.rotateZ(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanRotateZ$1:static end.*/

                /*LeanTweenExt.LeanScale:static start.*/
                LeanScale: function (gameObject, to, time) {
                    return LeanTween.scale$1(gameObject, to, time);
                },
                /*LeanTweenExt.LeanScale:static end.*/

                /*LeanTweenExt.LeanScale$2:static start.*/
                LeanScale$2: function (transform, to, time) {
                    return LeanTween.scale$1(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanScale$2:static end.*/

                /*LeanTweenExt.LeanScale$1:static start.*/
                LeanScale$1: function (rectTransform, to, time) {
                    return LeanTween.scale$2(rectTransform, to, time);
                },
                /*LeanTweenExt.LeanScale$1:static end.*/

                /*LeanTweenExt.LeanScaleX:static start.*/
                LeanScaleX: function (gameObject, to, time) {
                    return LeanTween.scaleX(gameObject, to, time);
                },
                /*LeanTweenExt.LeanScaleX:static end.*/

                /*LeanTweenExt.LeanScaleX$1:static start.*/
                LeanScaleX$1: function (transform, to, time) {
                    return LeanTween.scaleX(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanScaleX$1:static end.*/

                /*LeanTweenExt.LeanScaleY:static start.*/
                LeanScaleY: function (gameObject, to, time) {
                    return LeanTween.scaleY(gameObject, to, time);
                },
                /*LeanTweenExt.LeanScaleY:static end.*/

                /*LeanTweenExt.LeanScaleY$1:static start.*/
                LeanScaleY$1: function (transform, to, time) {
                    return LeanTween.scaleY(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanScaleY$1:static end.*/

                /*LeanTweenExt.LeanScaleZ:static start.*/
                LeanScaleZ: function (gameObject, to, time) {
                    return LeanTween.scaleZ(gameObject, to, time);
                },
                /*LeanTweenExt.LeanScaleZ:static end.*/

                /*LeanTweenExt.LeanScaleZ$1:static start.*/
                LeanScaleZ$1: function (transform, to, time) {
                    return LeanTween.scaleZ(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanScaleZ$1:static end.*/

                /*LeanTweenExt.LeanSize:static start.*/
                LeanSize: function (rectTransform, to, time) {
                    return LeanTween.size(rectTransform, to, time);
                },
                /*LeanTweenExt.LeanSize:static end.*/

                /*LeanTweenExt.LeanValue$7:static start.*/
                LeanValue$7: function (gameObject, from, to, time) {
                    return LeanTween.value$9(gameObject, from, to, time);
                },
                /*LeanTweenExt.LeanValue$7:static end.*/

                /*LeanTweenExt.LeanValue$6:static start.*/
                LeanValue$6: function (gameObject, from, to, time) {
                    return LeanTween.value$8(gameObject, from, to, time);
                },
                /*LeanTweenExt.LeanValue$6:static end.*/

                /*LeanTweenExt.LeanValue$8:static start.*/
                LeanValue$8: function (gameObject, from, to, time) {
                    return LeanTween.value$10(gameObject, from, to, time);
                },
                /*LeanTweenExt.LeanValue$8:static end.*/

                /*LeanTweenExt.LeanValue$9:static start.*/
                LeanValue$9: function (gameObject, from, to, time) {
                    return LeanTween.value$11(gameObject, from, to, time);
                },
                /*LeanTweenExt.LeanValue$9:static end.*/

                /*LeanTweenExt.LeanValue:static start.*/
                LeanValue: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.value$1(gameObject, callOnUpdate, from, to, time);
                },
                /*LeanTweenExt.LeanValue:static end.*/

                /*LeanTweenExt.LeanValue$5:static start.*/
                LeanValue$5: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.value$6(gameObject, callOnUpdate, from, to, time);
                },
                /*LeanTweenExt.LeanValue$5:static end.*/

                /*LeanTweenExt.LeanValue$4:static start.*/
                LeanValue$4: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.value$5(gameObject, callOnUpdate, from, to, time);
                },
                /*LeanTweenExt.LeanValue$4:static end.*/

                /*LeanTweenExt.LeanValue$1:static start.*/
                LeanValue$1: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.value$2(gameObject, callOnUpdate, from, to, time);
                },
                /*LeanTweenExt.LeanValue$1:static end.*/

                /*LeanTweenExt.LeanValue$2:static start.*/
                LeanValue$2: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.value$3(gameObject, callOnUpdate, from, to, time);
                },
                /*LeanTweenExt.LeanValue$2:static end.*/

                /*LeanTweenExt.LeanValue$3:static start.*/
                LeanValue$3: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.value$4(gameObject, callOnUpdate, from, to, time);
                },
                /*LeanTweenExt.LeanValue$3:static end.*/

                /*LeanTweenExt.LeanSetPosX:static start.*/
                LeanSetPosX: function (transform, val) {
                    transform.position = new pc.Vec3( val, transform.position.y, transform.position.z );
                },
                /*LeanTweenExt.LeanSetPosX:static end.*/

                /*LeanTweenExt.LeanSetPosY:static start.*/
                LeanSetPosY: function (transform, val) {
                    transform.position = new pc.Vec3( transform.position.x, val, transform.position.z );
                },
                /*LeanTweenExt.LeanSetPosY:static end.*/

                /*LeanTweenExt.LeanSetPosZ:static start.*/
                LeanSetPosZ: function (transform, val) {
                    transform.position = new pc.Vec3( transform.position.x, transform.position.y, val );
                },
                /*LeanTweenExt.LeanSetPosZ:static end.*/

                /*LeanTweenExt.LeanSetLocalPosX:static start.*/
                LeanSetLocalPosX: function (transform, val) {
                    transform.localPosition = new pc.Vec3( val, transform.localPosition.y, transform.localPosition.z );
                },
                /*LeanTweenExt.LeanSetLocalPosX:static end.*/

                /*LeanTweenExt.LeanSetLocalPosY:static start.*/
                LeanSetLocalPosY: function (transform, val) {
                    transform.localPosition = new pc.Vec3( transform.localPosition.x, val, transform.localPosition.z );
                },
                /*LeanTweenExt.LeanSetLocalPosY:static end.*/

                /*LeanTweenExt.LeanSetLocalPosZ:static start.*/
                LeanSetLocalPosZ: function (transform, val) {
                    transform.localPosition = new pc.Vec3( transform.localPosition.x, transform.localPosition.y, val );
                },
                /*LeanTweenExt.LeanSetLocalPosZ:static end.*/


            }
        }
    });
    /*LeanTweenExt end.*/

    /*LeanTweenType start.*/
    Bridge.define("LeanTweenType", {
        $kind: 6,
        statics: {
            fields: {
                notUsed: 0,
                linear: 1,
                easeOutQuad: 2,
                easeInQuad: 3,
                easeInOutQuad: 4,
                easeInCubic: 5,
                easeOutCubic: 6,
                easeInOutCubic: 7,
                easeInQuart: 8,
                easeOutQuart: 9,
                easeInOutQuart: 10,
                easeInQuint: 11,
                easeOutQuint: 12,
                easeInOutQuint: 13,
                easeInSine: 14,
                easeOutSine: 15,
                easeInOutSine: 16,
                easeInExpo: 17,
                easeOutExpo: 18,
                easeInOutExpo: 19,
                easeInCirc: 20,
                easeOutCirc: 21,
                easeInOutCirc: 22,
                easeInBounce: 23,
                easeOutBounce: 24,
                easeInOutBounce: 25,
                easeInBack: 26,
                easeOutBack: 27,
                easeInOutBack: 28,
                easeInElastic: 29,
                easeOutElastic: 30,
                easeInOutElastic: 31,
                easeSpring: 32,
                easeShake: 33,
                punch: 34,
                once: 35,
                clamp: 36,
                pingPong: 37,
                animationCurve: 38
            }
        }
    });
    /*LeanTweenType end.*/

    /*Loading start.*/
    Bridge.define("Loading", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            mSlider: null
        },
        methods: {
            /*Loading.Start start.*/
            Start: function () {
                LeanTween.value(0.0, 1.0, 1.0).setOnUpdate(Bridge.fn.bind(this, function (fValue) {
                    this.mSlider.value = fValue;
                })).setOnComplete(Bridge.fn.bind(this, function () {
                    this.gameObject.SetActive(false);
                }));
            },
            /*Loading.Start end.*/

            /*Loading.Update start.*/
            Update: function () {

            },
            /*Loading.Update end.*/


        }
    });
    /*Loading end.*/

    /*LTBezier start.*/
    Bridge.define("LTBezier", {
        fields: {
            length: 0,
            a: null,
            aa: null,
            bb: null,
            cc: null,
            len: 0,
            arcLengths: null
        },
        ctors: {
            init: function () {
                this.a = new UnityEngine.Vector3();
                this.aa = new UnityEngine.Vector3();
                this.bb = new UnityEngine.Vector3();
                this.cc = new UnityEngine.Vector3();
            },
            ctor: function (a, b, c, d, precision) {
                this.$initialize();
                this.a = a.$clone();
                this.aa = (a.$clone().scale( -1 ).add( (b.$clone().sub( c )).clone().scale( 3 ) ).add( d ));
                this.bb = (a.$clone().add( c )).clone().scale( 3 ).sub( b.clone().scale( 6 ) );
                this.cc = (b.$clone().sub( a )).clone().scale( 3 );

                this.len = 1.0 / precision;
                this.arcLengths = System.Array.init(((Bridge.Int.clip32(this.len) + 1) | 0), 0, System.Single);
                this.arcLengths[0] = 0;

                var ov = a.$clone();
                var v = new UnityEngine.Vector3();
                var clen = 0.0;
                for (var i = 1; i <= this.len; i = (i + 1) | 0) {
                    v = this.bezierPoint(i * precision);
                    clen += (ov.$clone().sub( v )).length();
                    this.arcLengths[i] = clen;
                    ov = v.$clone();
                }
                this.length = clen;
            }
        },
        methods: {
            /*LTBezier.map start.*/
            map: function (u) {
                var targetLength = u * this.arcLengths[Bridge.Int.clip32(this.len)];
                var low = 0;
                var high = Bridge.Int.clip32(this.len);
                var index = 0;
                while (low < high) {
                    index = (low + (Bridge.Int.clip32(((((high - low) | 0)) / 2.0)) | 0)) | 0;
                    if (this.arcLengths[index] < targetLength) {
                        low = (index + 1) | 0;
                    } else {
                        high = index;
                    }
                }
                if (this.arcLengths[index] > targetLength) {
                    index = (index - 1) | 0;
                }
                if (index < 0) {
                    index = 0;
                }

                return (index + (targetLength - this.arcLengths[index]) / (this.arcLengths[((index + 1) | 0)] - this.arcLengths[index])) / this.len;
            },
            /*LTBezier.map end.*/

            /*LTBezier.bezierPoint start.*/
            bezierPoint: function (t) {
                return ((this.aa.$clone().clone().scale( t ).add( (this.bb) )).clone().scale( t ).add( this.cc )).clone().scale( t ).add( this.a );
            },
            /*LTBezier.bezierPoint end.*/

            /*LTBezier.point start.*/
            point: function (t) {
                return this.bezierPoint(this.map(t));
            },
            /*LTBezier.point end.*/


        }
    });
    /*LTBezier end.*/

    /*LTBezierPath start.*/
    Bridge.define("LTBezierPath", {
        fields: {
            pts: null,
            length: 0,
            orientToPath: false,
            orientToPath2d: false,
            beziers: null,
            lengthRatio: null,
            currentBezier: 0,
            previousBezier: 0
        },
        props: {
            distance: {
                get: function () {
                    return this.length;
                }
            }
        },
        ctors: {
            init: function () {
                this.currentBezier = 0;
                this.previousBezier = 0;
            },
            ctor: function () {
                this.$initialize();
            },
            $ctor1: function (pts_) {
                this.$initialize();
                this.setPoints(pts_);
            }
        },
        methods: {
            /*LTBezierPath.setPoints start.*/
            setPoints: function (pts_) {
                if (pts_.length < 4) {
                    LeanTween.logError("LeanTween - When passing values for a vector path, you must pass four or more values!");
                }
                if (pts_.length % 4 !== 0) {
                    LeanTween.logError("LeanTween - When passing values for a vector path, they must be in sets of four: controlPoint1, controlPoint2, endPoint2, controlPoint2, controlPoint2...");
                }

                this.pts = pts_;

                var k = 0;
                this.beziers = System.Array.init(((Bridge.Int.div(this.pts.length, 4)) | 0), null, LTBezier);
                this.lengthRatio = System.Array.init(this.beziers.length, 0, System.Single);
                var i;
                this.length = 0;
                for (i = 0; i < this.pts.length; i = (i + 4) | 0) {
                    this.beziers[k] = new LTBezier(this.pts[((i + 0) | 0)].$clone(), this.pts[((i + 2) | 0)].$clone(), this.pts[((i + 1) | 0)].$clone(), this.pts[((i + 3) | 0)].$clone(), 0.05);
                    this.length += this.beziers[k].length;
                    k = (k + 1) | 0;
                }
                // Debug.Log("beziers.Length:"+beziers.Length + " beziers:"+beziers);
                for (i = 0; i < this.beziers.length; i = (i + 1) | 0) {
                    this.lengthRatio[i] = this.beziers[i].length / this.length;
                }
            },
            /*LTBezierPath.setPoints end.*/

            /*LTBezierPath.point start.*/
            point: function (ratio) {
                var added = 0.0;
                for (var i = 0; i < this.lengthRatio.length; i = (i + 1) | 0) {
                    added += this.lengthRatio[i];
                    if (added >= ratio) {
                        return this.beziers[i].point((ratio - (added - this.lengthRatio[i])) / this.lengthRatio[i]);
                    }
                }
                return this.beziers[((this.lengthRatio.length - 1) | 0)].point(1.0);
            },
            /*LTBezierPath.point end.*/

            /*LTBezierPath.place2d start.*/
            place2d: function (transform, ratio) {
                transform.position = this.point(ratio);
                ratio += 0.001;
                if (ratio <= 1.0) {
                    var v3Dir = this.point(ratio).sub( transform.position );
                    var angle = Math.atan2(v3Dir.y, v3Dir.x) * UnityEngine.Mathf.Rad2Deg;
                    transform.eulerAngles = new pc.Vec3( 0, 0, angle );
                }
            },
            /*LTBezierPath.place2d end.*/

            /*LTBezierPath.placeLocal2d start.*/
            placeLocal2d: function (transform, ratio) {
                transform.localPosition = this.point(ratio);
                ratio += 0.001;
                if (ratio <= 1.0) {
                    var v3Dir = this.point(ratio).sub( transform.localPosition );
                    var angle = Math.atan2(v3Dir.y, v3Dir.x) * UnityEngine.Mathf.Rad2Deg;
                    transform.localEulerAngles = new pc.Vec3( 0, 0, angle );
                }
            },
            /*LTBezierPath.placeLocal2d end.*/

            /*LTBezierPath.place start.*/
            place: function (transform, ratio) {
                this.place$1(transform, ratio, pc.Vec3.UP.clone());

            },
            /*LTBezierPath.place end.*/

            /*LTBezierPath.place$1 start.*/
            place$1: function (transform, ratio, worldUp) {
                transform.position = this.point(ratio);
                ratio += 0.001;
                if (ratio <= 1.0) {
                    transform.LookAt$3(this.point(ratio), worldUp);
                }

            },
            /*LTBezierPath.place$1 end.*/

            /*LTBezierPath.placeLocal start.*/
            placeLocal: function (transform, ratio) {
                this.placeLocal$1(transform, ratio, pc.Vec3.UP.clone());
            },
            /*LTBezierPath.placeLocal end.*/

            /*LTBezierPath.placeLocal$1 start.*/
            placeLocal$1: function (transform, ratio, worldUp) {
                // Debug.Log("place ratio:" + ratio + " greater:"+(ratio>1f));
                ratio = Math.max(0, Math.min(1, ratio));
                transform.localPosition = this.point(ratio);
                // Debug.Log("ratio:" + ratio + " +:" + (ratio + 0.001f));
                ratio = Math.max(0, Math.min(1, ratio + 0.001));

                if (ratio <= 1.0) {
                    transform.LookAt$3(transform.parent.TransformPoint$1(this.point(ratio)), worldUp);
                }
            },
            /*LTBezierPath.placeLocal$1 end.*/

            /*LTBezierPath.gizmoDraw start.*/
            gizmoDraw: function (t) {
                if (t === void 0) { t = -1.0; }
                var prevPt = this.point(0);

                for (var i = 1; i <= 120; i = (i + 1) | 0) {
                    var pm = i / 120.0;
                    var currPt2 = this.point(pm);
                    //Gizmos.color = new Color(UnityEngine.Random.Range(0f,1f),UnityEngine.Random.Range(0f,1f),UnityEngine.Random.Range(0f,1f),1);
                    pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = (this.previousBezier === this.currentBezier) ? new pc.Color( 1, 0, 1, 1 ) : new pc.Color( 0.5, 0.5, 0.5, 1 );
                    pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawLine', null );
                    prevPt = currPt2.$clone();
                    this.previousBezier = this.currentBezier;
                }
            },
            /*LTBezierPath.gizmoDraw end.*/

            /*LTBezierPath.ratioAtPoint start.*/
            ratioAtPoint: function (pt, precision) {
                if (precision === void 0) { precision = 0.01; }
                var closestDist = 3.40282347E+38;
                var closestI = 0;
                var maxIndex = Math.round(1.0 / precision);
                for (var i = 0; i < maxIndex; i = (i + 1) | 0) {
                    var ratio = i / maxIndex;
                    var dist = pc.Vec3.distance( pt, this.point(ratio) );
                    // Debug.Log("i:"+i+" dist:"+dist);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closestI = i;
                    }
                }
                //Debug.Log("closestI:"+closestI+" maxIndex:"+maxIndex);
                return closestI / (maxIndex);
            },
            /*LTBezierPath.ratioAtPoint end.*/


        },
        overloads: {
            "place(Transform, float, Vector3)": "place$1",
            "placeLocal(Transform, float, Vector3)": "placeLocal$1"
        }
    });
    /*LTBezierPath end.*/

    /*LTDescr start.*/
    Bridge.define("LTDescr", {
        statics: {
            fields: {
                val: 0,
                dt: 0,
                newVect: null
            },
            ctors: {
                init: function () {
                    this.newVect = new UnityEngine.Vector3();
                }
            },
            methods: {
                /*LTDescr.alphaRecursive$1:static start.*/
                alphaRecursive$1: function (transform, val, useRecursion) {
                    var $t, $t1;
                    if (useRecursion === void 0) { useRecursion = true; }
                    var renderer = transform.gameObject.GetComponent(UnityEngine.Renderer);
                    if (UnityEngine.Component.op_Inequality(renderer, null)) {
                        $t = Bridge.getEnumerator(renderer.materials);
                        try {
                            while ($t.moveNext()) {
                                var mat = $t.Current;
                                if (mat.HasProperty$1("_Color")) {
                                    mat.color = new pc.Color( mat.color.r, mat.color.g, mat.color.b, val );
                                } else if (mat.HasProperty$1("_TintColor")) {
                                    var col = mat.GetColor$1("_TintColor");
                                    mat.SetColor$1("_TintColor", new pc.Color( col.r, col.g, col.b, val ));
                                }
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                    if (useRecursion && transform.childCount > 0) {
                        $t1 = Bridge.getEnumerator(transform);
                        try {
                            while ($t1.moveNext()) {
                                var child = Bridge.cast($t1.Current, UnityEngine.Transform);
                                LTDescr.alphaRecursive$1(child, val);
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.alphaRecursive$1:static end.*/

                /*LTDescr.alphaRecursive:static start.*/
                alphaRecursive: function (rectTransform, val, recursiveLevel) {
                    var $t;
                    if (recursiveLevel === void 0) { recursiveLevel = 0; }
                    if (rectTransform.childCount > 0) {
                        $t = Bridge.getEnumerator(rectTransform);
                        try {
                            while ($t.moveNext()) {
                                var child = Bridge.cast($t.Current, UnityEngine.RectTransform);
                                var uiImage = child.GetComponent(UnityEngine.UI.Image);
                                if (UnityEngine.MonoBehaviour.op_Inequality(uiImage, null)) {
                                    var c = uiImage.color.$clone();
                                    c.a = val;
                                    uiImage.color = c.$clone();
                                } else {
                                    uiImage = child.GetComponent(UnityEngine.UI.RawImage);
                                    if (UnityEngine.MonoBehaviour.op_Inequality(uiImage, null)) {
                                        var c1 = uiImage.color.$clone();
                                        c1.a = val;
                                        uiImage.color = c1.$clone();
                                    }
                                }

                                LTDescr.alphaRecursive(child, val, ((recursiveLevel + 1) | 0));
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.alphaRecursive:static end.*/

                /*LTDescr.colorRecursive$1:static start.*/
                colorRecursive$1: function (transform, toColor, useRecursion) {
                    var $t, $t1;
                    if (useRecursion === void 0) { useRecursion = true; }
                    var ren = transform.gameObject.GetComponent(UnityEngine.Renderer);
                    if (UnityEngine.Component.op_Inequality(ren, null)) {
                        $t = Bridge.getEnumerator(ren.materials);
                        try {
                            while ($t.moveNext()) {
                                var mat = $t.Current;
                                mat.color = toColor.$clone();
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                    if (useRecursion && transform.childCount > 0) {
                        $t1 = Bridge.getEnumerator(transform);
                        try {
                            while ($t1.moveNext()) {
                                var child = Bridge.cast($t1.Current, UnityEngine.Transform);
                                LTDescr.colorRecursive$1(child, toColor);
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.colorRecursive$1:static end.*/

                /*LTDescr.colorRecursive:static start.*/
                colorRecursive: function (rectTransform, toColor) {
                    var $t;

                    if (rectTransform.childCount > 0) {
                        $t = Bridge.getEnumerator(rectTransform);
                        try {
                            while ($t.moveNext()) {
                                var child = Bridge.cast($t.Current, UnityEngine.RectTransform);
                                var uiImage = child.GetComponent(UnityEngine.UI.Image);
                                if (UnityEngine.MonoBehaviour.op_Inequality(uiImage, null)) {
                                    uiImage.color = toColor.$clone();
                                } else {
                                    uiImage = child.GetComponent(UnityEngine.UI.RawImage);
                                    if (UnityEngine.MonoBehaviour.op_Inequality(uiImage, null)) {
                                        uiImage.color = toColor.$clone();
                                    }
                                }
                                LTDescr.colorRecursive(child, toColor);
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.colorRecursive:static end.*/

                /*LTDescr.alphaRecursiveSprite:static start.*/
                alphaRecursiveSprite: function (transform, val) {
                    var $t;
                    if (transform.childCount > 0) {
                        $t = Bridge.getEnumerator(transform);
                        try {
                            while ($t.moveNext()) {
                                var child = Bridge.cast($t.Current, UnityEngine.Transform);
                                var ren = child.GetComponent(UnityEngine.SpriteRenderer);
                                if (UnityEngine.Component.op_Inequality(ren, null)) {
                                    ren.color = new pc.Color( ren.color.r, ren.color.g, ren.color.b, val );
                                }
                                LTDescr.alphaRecursiveSprite(child, val);
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.alphaRecursiveSprite:static end.*/

                /*LTDescr.colorRecursiveSprite:static start.*/
                colorRecursiveSprite: function (transform, toColor) {
                    var $t;
                    if (transform.childCount > 0) {
                        $t = Bridge.getEnumerator(transform);
                        try {
                            while ($t.moveNext()) {
                                var child = Bridge.cast($t.Current, UnityEngine.Transform);
                                var ren = transform.gameObject.GetComponent(UnityEngine.SpriteRenderer);
                                if (UnityEngine.Component.op_Inequality(ren, null)) {
                                    ren.color = toColor.$clone();
                                }
                                LTDescr.colorRecursiveSprite(child, toColor);
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.colorRecursiveSprite:static end.*/

                /*LTDescr.textAlphaChildrenRecursive:static start.*/
                textAlphaChildrenRecursive: function (trans, val, useRecursion) {
                    var $t;
                    if (useRecursion === void 0) { useRecursion = true; }

                    if (useRecursion && trans.childCount > 0) {
                        $t = Bridge.getEnumerator(trans);
                        try {
                            while ($t.moveNext()) {
                                var child = Bridge.cast($t.Current, UnityEngine.Transform);
                                var uiText = child.GetComponent(UnityEngine.UI.Text);
                                if (UnityEngine.MonoBehaviour.op_Inequality(uiText, null)) {
                                    var c = uiText.color.$clone();
                                    c.a = val;
                                    uiText.color = c.$clone();
                                }
                                LTDescr.textAlphaChildrenRecursive(child, val);
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.textAlphaChildrenRecursive:static end.*/

                /*LTDescr.textAlphaRecursive:static start.*/
                textAlphaRecursive: function (trans, val, useRecursion) {
                    var $t;
                    if (useRecursion === void 0) { useRecursion = true; }
                    var uiText = trans.GetComponent(UnityEngine.UI.Text);
                    if (UnityEngine.MonoBehaviour.op_Inequality(uiText, null)) {
                        var c = uiText.color.$clone();
                        c.a = val;
                        uiText.color = c.$clone();
                    }
                    if (useRecursion && trans.childCount > 0) {
                        $t = Bridge.getEnumerator(trans);
                        try {
                            while ($t.moveNext()) {
                                var child = Bridge.cast($t.Current, UnityEngine.Transform);
                                LTDescr.textAlphaRecursive(child, val);
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.textAlphaRecursive:static end.*/

                /*LTDescr.textColorRecursive:static start.*/
                textColorRecursive: function (trans, toColor) {
                    var $t;
                    if (trans.childCount > 0) {
                        $t = Bridge.getEnumerator(trans);
                        try {
                            while ($t.moveNext()) {
                                var child = Bridge.cast($t.Current, UnityEngine.Transform);
                                var uiText = child.GetComponent(UnityEngine.UI.Text);
                                if (UnityEngine.MonoBehaviour.op_Inequality(uiText, null)) {
                                    uiText.color = toColor.$clone();
                                }
                                LTDescr.textColorRecursive(child, toColor);
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.textColorRecursive:static end.*/

                /*LTDescr.tweenColor:static start.*/
                tweenColor: function (tween, val) {
                    var diff3 = tween._optional.point.$clone().sub( tween._optional.axis );
                    var diffAlpha = tween.to.y - tween.from.y;
                    return new pc.Color( tween._optional.axis.x + diff3.x * val, tween._optional.axis.y + diff3.y * val, tween._optional.axis.z + diff3.z * val, tween.from.y + diffAlpha * val );
                },
                /*LTDescr.tweenColor:static end.*/


            }
        },
        fields: {
            toggle: false,
            useEstimatedTime: false,
            useFrames: false,
            useManualTime: false,
            usesNormalDt: false,
            hasInitiliazed: false,
            hasExtraOnCompletes: false,
            hasPhysics: false,
            onCompleteOnRepeat: false,
            onCompleteOnStart: false,
            useRecursion: false,
            ratioPassed: 0,
            passed: 0,
            delay: 0,
            time: 0,
            speed: 0,
            lastVal: 0,
            _id: 0,
            loopCount: 0,
            counter: 0,
            direction: 0,
            directionLast: 0,
            overshoot: 0,
            period: 0,
            scale: 0,
            destroyOnComplete: false,
            trans: null,
            fromInternal: null,
            toInternal: null,
            diff: null,
            diffDiv2: null,
            type: 0,
            easeType: 0,
            loopType: 0,
            hasUpdateCallback: false,
            easeMethod: null,
            easeInternal: null,
            initInternal: null,
            spriteRen: null,
            rectTransform: null,
            uiText: null,
            uiImage: null,
            rawImage: null,
            sprites: null,
            _optional: null
        },
        props: {
            from: {
                get: function () {
                    return this.fromInternal.$clone();
                },
                set: function (value) {
                    this.fromInternal = value.$clone();
                }
            },
            to: {
                get: function () {
                    return this.toInternal.$clone();
                },
                set: function (value) {
                    this.toInternal = value.$clone();
                }
            },
            toTrans: {
                get: function () {
                    return this.optional.toTrans;
                }
            },
            uniqueId: {
                get: function () {
                    var toId = (this._id | ((this.counter << 16) >>> 0)) >>> 0;

                    /* uint backId = toId & 0xFFFF;
                    			uint backCounter = toId >> 16;
                    			if(_id!=backId || backCounter!=counter){
                    				Debug.LogError("BAD CONVERSION toId:"+_id);
                    			}*/

                    return (toId | 0);
                }
            },
            id: {
                get: function () {
                    return this.uniqueId;
                }
            },
            optional: {
                get: function () {
                    return this._optional;
                },
                set: function (value) {
                    this._optional = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.fromInternal = new UnityEngine.Vector3();
                this.toInternal = new UnityEngine.Vector3();
                this.diff = new UnityEngine.Vector3();
                this.diffDiv2 = new UnityEngine.Vector3();
                this.counter = 4294967295;
                this._optional = new LTDescrOptional();
            },
            ctor: function () {
                this.$initialize();

            }
        },
        methods: {
            /*LTDescr.toString start.*/
            toString: function () {
                return ((UnityEngine.Component.op_Inequality(this.trans, null) ? "name:" + (this.trans.gameObject.name || "") : "gameObject:null") || "") + " toggle:" + System.Boolean.toString(this.toggle) + " passed:" + System.Single.format(this.passed) + " time:" + System.Single.format(this.time) + " delay:" + System.Single.format(this.delay) + " direction:" + System.Single.format(this.direction) + " from:" + this.from + " to:" + this.to + " diff:" + this.diff + " type:" + System.Enum.toString(TweenAction, this.type) + " ease:" + System.Enum.toString(LeanTweenType, this.easeType) + " useEstimatedTime:" + System.Boolean.toString(this.useEstimatedTime) + " id:" + this.id + " hasInitiliazed:" + System.Boolean.toString(this.hasInitiliazed);
            },
            /*LTDescr.toString end.*/

            /*LTDescr.cancel start.*/
            cancel: function (gameObject) {
                // Debug.Log("canceling id:"+this._id+" this.uniqueId:"+this.uniqueId+" go:"+this.trans.gameObject);
                if (UnityEngine.GameObject.op_Equality(gameObject, this.trans.gameObject)) {
                    LeanTween.removeTween$1((this._id | 0), this.uniqueId);
                }
                return this;
            },
            /*LTDescr.cancel end.*/

            /*LTDescr.reset start.*/
            reset: function () {
                var $t;
                this.toggle = (this.useRecursion = (this.usesNormalDt = true));
                this.trans = null;
                this.spriteRen = null;
                this.passed = (this.delay = (this.lastVal = 0.0));
                this.hasUpdateCallback = (this.useEstimatedTime = (this.useFrames = (this.hasInitiliazed = (this.onCompleteOnRepeat = (this.destroyOnComplete = (this.onCompleteOnStart = (this.useManualTime = (this.hasExtraOnCompletes = (this.toggle = false)))))))));
                this.easeType = LeanTweenType.linear;
                this.loopType = LeanTweenType.once;
                this.loopCount = 0;
                this.direction = (this.directionLast = (this.overshoot = (this.scale = 1.0)));
                this.period = 0.3;
                this.speed = -1.0;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeLinear);
                this.from = ($t = pc.Vec3.ZERO.clone(), this.to = $t.$clone(), $t);
                this._optional.reset();
            },
            /*LTDescr.reset end.*/

            /*LTDescr.setFollow start.*/
            setFollow: function () {
                this.type = TweenAction.FOLLOW;
                return this;
            },
            /*LTDescr.setFollow end.*/

            /*LTDescr.setMoveX start.*/
            setMoveX: function () {
                this.type = TweenAction.MOVE_X;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.position.x;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.position = new pc.Vec3( this.easeMethod().x, this.trans.position.y, this.trans.position.z );
                });
                return this;
            },
            /*LTDescr.setMoveX end.*/

            /*LTDescr.setMoveY start.*/
            setMoveY: function () {
                this.type = TweenAction.MOVE_Y;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.position.y;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.position = new pc.Vec3( this.trans.position.x, this.easeMethod().x, this.trans.position.z );
                });
                return this;
            },
            /*LTDescr.setMoveY end.*/

            /*LTDescr.setMoveZ start.*/
            setMoveZ: function () {
                this.type = TweenAction.MOVE_Z;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.position.z;
                });
                ;
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.position = new pc.Vec3( this.trans.position.x, this.trans.position.y, this.easeMethod().x );
                });
                return this;
            },
            /*LTDescr.setMoveZ end.*/

            /*LTDescr.setMoveLocalX start.*/
            setMoveLocalX: function () {
                this.type = TweenAction.MOVE_LOCAL_X;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.localPosition.x;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.localPosition = new pc.Vec3( this.easeMethod().x, this.trans.localPosition.y, this.trans.localPosition.z );
                });
                return this;
            },
            /*LTDescr.setMoveLocalX end.*/

            /*LTDescr.setMoveLocalY start.*/
            setMoveLocalY: function () {
                this.type = TweenAction.MOVE_LOCAL_Y;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.localPosition.y;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.localPosition = new pc.Vec3( this.trans.localPosition.x, this.easeMethod().x, this.trans.localPosition.z );
                });
                return this;
            },
            /*LTDescr.setMoveLocalY end.*/

            /*LTDescr.setMoveLocalZ start.*/
            setMoveLocalZ: function () {
                this.type = TweenAction.MOVE_LOCAL_Z;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.localPosition.z;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.localPosition = new pc.Vec3( this.trans.localPosition.x, this.trans.localPosition.y, this.easeMethod().x );
                });
                return this;
            },
            /*LTDescr.setMoveLocalZ end.*/

            /*LTDescr.initFromInternal start.*/
            initFromInternal: function () {
                this.fromInternal.x = 0;
            },
            /*LTDescr.initFromInternal end.*/

            /*LTDescr.setOffset start.*/
            setOffset: function (offset) {
                this.toInternal = offset.$clone();
                return this;
            },
            /*LTDescr.setOffset end.*/

            /*LTDescr.setMoveCurved start.*/
            setMoveCurved: function () {
                this.type = TweenAction.MOVE_CURVED;
                this.initInternal = Bridge.fn.cacheBind(this, this.initFromInternal);
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    if (this._optional.path.orientToPath) {
                        if (this._optional.path.orientToPath2d) {
                            this._optional.path.place2d(this.trans, LTDescr.val);
                        } else {
                            this._optional.path.place(this.trans, LTDescr.val);
                        }
                    } else {
                        this.trans.position = this._optional.path.point(LTDescr.val);
                    }
                });
                return this;
            },
            /*LTDescr.setMoveCurved end.*/

            /*LTDescr.setMoveCurvedLocal start.*/
            setMoveCurvedLocal: function () {
                this.type = TweenAction.MOVE_CURVED_LOCAL;
                this.initInternal = Bridge.fn.cacheBind(this, this.initFromInternal);
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    if (this._optional.path.orientToPath) {
                        if (this._optional.path.orientToPath2d) {
                            this._optional.path.placeLocal2d(this.trans, LTDescr.val);
                        } else {
                            this._optional.path.placeLocal(this.trans, LTDescr.val);
                        }
                    } else {
                        this.trans.localPosition = this._optional.path.point(LTDescr.val);
                    }
                });
                return this;
            },
            /*LTDescr.setMoveCurvedLocal end.*/

            /*LTDescr.setMoveSpline start.*/
            setMoveSpline: function () {
                this.type = TweenAction.MOVE_SPLINE;
                this.initInternal = Bridge.fn.cacheBind(this, this.initFromInternal);
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    if (this._optional.spline.orientToPath) {
                        if (this._optional.spline.orientToPath2d) {
                            this._optional.spline.place2d(this.trans, LTDescr.val);
                        } else {
                            this._optional.spline.place(this.trans, LTDescr.val);
                        }
                    } else {
                        this.trans.position = this._optional.spline.point(LTDescr.val);
                    }
                });
                return this;
            },
            /*LTDescr.setMoveSpline end.*/

            /*LTDescr.setMoveSplineLocal start.*/
            setMoveSplineLocal: function () {
                this.type = TweenAction.MOVE_SPLINE_LOCAL;
                this.initInternal = Bridge.fn.cacheBind(this, this.initFromInternal);
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    if (this._optional.spline.orientToPath) {
                        if (this._optional.spline.orientToPath2d) {
                            this._optional.spline.placeLocal2d(this.trans, LTDescr.val);
                        } else {
                            this._optional.spline.placeLocal(this.trans, LTDescr.val);
                        }
                    } else {
                        this.trans.localPosition = this._optional.spline.point(LTDescr.val);
                    }
                });
                return this;
            },
            /*LTDescr.setMoveSplineLocal end.*/

            /*LTDescr.setScaleX start.*/
            setScaleX: function () {
                this.type = TweenAction.SCALE_X;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.localScale.x;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.localScale = new pc.Vec3( this.easeMethod().x, this.trans.localScale.y, this.trans.localScale.z );
                });
                return this;
            },
            /*LTDescr.setScaleX end.*/

            /*LTDescr.setScaleY start.*/
            setScaleY: function () {
                this.type = TweenAction.SCALE_Y;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.localScale.y;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.localScale = new pc.Vec3( this.trans.localScale.x, this.easeMethod().x, this.trans.localScale.z );
                });
                return this;
            },
            /*LTDescr.setScaleY end.*/

            /*LTDescr.setScaleZ start.*/
            setScaleZ: function () {
                this.type = TweenAction.SCALE_Z;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.localScale.z;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.localScale = new pc.Vec3( this.trans.localScale.x, this.trans.localScale.y, this.easeMethod().x );
                });
                return this;
            },
            /*LTDescr.setScaleZ end.*/

            /*LTDescr.setRotateX start.*/
            setRotateX: function () {
                this.type = TweenAction.ROTATE_X;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.eulerAngles.x;
                    this.toInternal.x = LeanTween.closestRot(this.fromInternal.x, this.toInternal.x);
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.eulerAngles = new pc.Vec3( this.easeMethod().x, this.trans.eulerAngles.y, this.trans.eulerAngles.z );
                });
                return this;
            },
            /*LTDescr.setRotateX end.*/

            /*LTDescr.setRotateY start.*/
            setRotateY: function () {
                this.type = TweenAction.ROTATE_Y;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.eulerAngles.y;
                    this.toInternal.x = LeanTween.closestRot(this.fromInternal.x, this.toInternal.x);
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.eulerAngles = new pc.Vec3( this.trans.eulerAngles.x, this.easeMethod().x, this.trans.eulerAngles.z );
                });
                return this;
            },
            /*LTDescr.setRotateY end.*/

            /*LTDescr.setRotateZ start.*/
            setRotateZ: function () {
                this.type = TweenAction.ROTATE_Z;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.eulerAngles.z;
                    this.toInternal.x = LeanTween.closestRot(this.fromInternal.x, this.toInternal.x);
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.eulerAngles = new pc.Vec3( this.trans.eulerAngles.x, this.trans.eulerAngles.y, this.easeMethod().x );
                });
                return this;
            },
            /*LTDescr.setRotateZ end.*/

            /*LTDescr.setRotateAround start.*/
            setRotateAround: function () {
                this.type = TweenAction.ROTATE_AROUND;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = 0.0;
                    this._optional.origRotation = this.trans.rotation.$clone();
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var origPos = this.trans.localPosition.$clone();
                    var rotateAroundPt = this.trans.TransformPoint$1(this._optional.point);
                    // Debug.Log("this._optional.point:"+this._optional.point);
                    this.trans.RotateAround(rotateAroundPt.$clone(), this._optional.axis.$clone(), -this._optional.lastVal);
                    var diff = origPos.$clone().sub( this.trans.localPosition );

                    this.trans.localPosition = origPos.$clone().sub( diff ); // Subtract the amount the object has been shifted over by the rotate, to get it back to it's orginal position
                    this.trans.rotation = this._optional.origRotation.$clone();

                    rotateAroundPt = this.trans.TransformPoint$1(this._optional.point);
                    this.trans.RotateAround(rotateAroundPt.$clone(), this._optional.axis.$clone(), LTDescr.val);

                    this._optional.lastVal = LTDescr.val;
                });
                return this;
            },
            /*LTDescr.setRotateAround end.*/

            /*LTDescr.setRotateAroundLocal start.*/
            setRotateAroundLocal: function () {
                this.type = TweenAction.ROTATE_AROUND_LOCAL;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = 0.0;
                    this._optional.origRotation = this.trans.localRotation.$clone();
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var origPos = this.trans.localPosition.$clone();
                    this.trans.RotateAround(this.trans.TransformPoint$1(this._optional.point), this.trans.TransformDirection$1(this._optional.axis.$clone()), -this._optional.lastVal);
                    var diff = origPos.$clone().sub( this.trans.localPosition );

                    this.trans.localPosition = origPos.$clone().sub( diff ); // Subtract the amount the object has been shifted over by the rotate, to get it back to it's orginal position
                    this.trans.localRotation = this._optional.origRotation.$clone();
                    var rotateAroundPt = this.trans.TransformPoint$1(this._optional.point);
                    this.trans.RotateAround(rotateAroundPt.$clone(), this.trans.TransformDirection$1(this._optional.axis.$clone()), LTDescr.val);

                    this._optional.lastVal = LTDescr.val;
                });
                return this;
            },
            /*LTDescr.setRotateAroundLocal end.*/

            /*LTDescr.setAlpha start.*/
            setAlpha: function () {
                this.type = TweenAction.ALPHA;
                this.initInternal = Bridge.fn.bind(this, function () {
                    var $t;
                    var ren = this.trans.GetComponent(UnityEngine.SpriteRenderer);
                    if (UnityEngine.Component.op_Inequality(ren, null)) {
                        this.fromInternal.x = ren.color.a;
                    } else {
                        if (UnityEngine.Component.op_Inequality(this.trans.GetComponent(UnityEngine.Renderer), null) && this.trans.GetComponent(UnityEngine.Renderer).material.HasProperty$1("_Color")) {
                            this.fromInternal.x = this.trans.GetComponent(UnityEngine.Renderer).material.color.a;
                        } else if (UnityEngine.Component.op_Inequality(this.trans.GetComponent(UnityEngine.Renderer), null) && this.trans.GetComponent(UnityEngine.Renderer).material.HasProperty$1("_TintColor")) {
                            var col = this.trans.GetComponent(UnityEngine.Renderer).material.GetColor$1("_TintColor");
                            this.fromInternal.x = col.a;
                        } else if (this.trans.childCount > 0) {
                            $t = Bridge.getEnumerator(this.trans);
                            try {
                                while ($t.moveNext()) {
                                    var child = Bridge.cast($t.Current, UnityEngine.Transform);
                                    if (UnityEngine.Component.op_Inequality(child.gameObject.GetComponent(UnityEngine.Renderer), null)) {
                                        var col1 = child.gameObject.GetComponent(UnityEngine.Renderer).material.color.$clone();
                                        this.fromInternal.x = col1.a;
                                        break;
                                    }
                                }
                            } finally {
                                if (Bridge.is($t, System.IDisposable)) {
                                    $t.System$IDisposable$Dispose();
                                }
                            }
                        }
                    }

                    this.easeInternal = Bridge.fn.bind(this, function () {
                        LTDescr.val = this.easeMethod().x;
                        if (UnityEngine.Component.op_Inequality(this.spriteRen, null)) {
                            this.spriteRen.color = new pc.Color( this.spriteRen.color.r, this.spriteRen.color.g, this.spriteRen.color.b, LTDescr.val );
                            LTDescr.alphaRecursiveSprite(this.trans, LTDescr.val);
                        } else {
                            LTDescr.alphaRecursive$1(this.trans, LTDescr.val, this.useRecursion);
                        }
                    });

                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    if (UnityEngine.Component.op_Inequality(this.spriteRen, null)) {
                        this.spriteRen.color = new pc.Color( this.spriteRen.color.r, this.spriteRen.color.g, this.spriteRen.color.b, LTDescr.val );
                        LTDescr.alphaRecursiveSprite(this.trans, LTDescr.val);
                    } else {
                        LTDescr.alphaRecursive$1(this.trans, LTDescr.val, this.useRecursion);
                    }
                });
                return this;
            },
            /*LTDescr.setAlpha end.*/

            /*LTDescr.setTextAlpha start.*/
            setTextAlpha: function () {
                this.type = TweenAction.TEXT_ALPHA;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.uiText = this.trans.GetComponent(UnityEngine.UI.Text);
                    this.fromInternal.x = UnityEngine.MonoBehaviour.op_Inequality(this.uiText, null) ? this.uiText.color.a : 1.0;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.textAlphaRecursive(this.trans, this.easeMethod().x, this.useRecursion);
                });
                return this;
            },
            /*LTDescr.setTextAlpha end.*/

            /*LTDescr.setAlphaVertex start.*/
            setAlphaVertex: function () {
                this.type = TweenAction.ALPHA_VERTEX;
                this.initInternal = Bridge.fn.bind(this, function () {
                    var $t;
                    this.fromInternal.x = ($t = this.trans.GetComponent(UnityEngine.MeshFilter).mesh.colors32)[0].a;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    var $t;
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var mesh = this.trans.GetComponent(UnityEngine.MeshFilter).mesh;
                    var vertices = mesh.vertices;
                    var colors = System.Array.init(vertices.length, function (){
                        return new UnityEngine.Color32();
                    }, UnityEngine.Color32);
                    if (colors.length === 0) { //MaxFW fix: add vertex colors if the mesh doesn't have any             
                        var transparentWhiteColor32 = new UnityEngine.Color32.$ctor1(255, 255, 255, 0);
                        colors = System.Array.init(mesh.vertices.length, function (){
                            return new UnityEngine.Color32();
                        }, UnityEngine.Color32);
                        for (var k = 0; k < colors.length; k = (k + 1) | 0) {
                            colors[k] = transparentWhiteColor32.$clone();
                        }
                        mesh.colors32 = colors;
                    } // fix end
                    var c = ($t = mesh.colors32)[0].$clone();
                    c = UnityEngine.Color32.op_Implicit$1(new pc.Color( c.r, c.g, c.b, LTDescr.val ));
                    for (var k1 = 0; k1 < vertices.length; k1 = (k1 + 1) | 0) {
                        colors[k1] = c.$clone();
                    }
                    mesh.colors32 = colors;
                });
                return this;
            },
            /*LTDescr.setAlphaVertex end.*/

            /*LTDescr.setColor start.*/
            setColor: function () {
                this.type = TweenAction.COLOR;
                this.initInternal = Bridge.fn.bind(this, function () {
                    var $t;
                    var renColor = this.trans.GetComponent(UnityEngine.SpriteRenderer);
                    if (UnityEngine.Component.op_Inequality(renColor, null)) {
                        this.setFromColor(renColor.color);
                    } else {
                        if (UnityEngine.Component.op_Inequality(this.trans.GetComponent(UnityEngine.Renderer), null) && this.trans.GetComponent(UnityEngine.Renderer).material.HasProperty$1("_Color")) {
                            var col = this.trans.GetComponent(UnityEngine.Renderer).material.color.$clone();
                            this.setFromColor(col);
                        } else if (UnityEngine.Component.op_Inequality(this.trans.GetComponent(UnityEngine.Renderer), null) && this.trans.GetComponent(UnityEngine.Renderer).material.HasProperty$1("_TintColor")) {
                            var col1 = this.trans.GetComponent(UnityEngine.Renderer).material.GetColor$1("_TintColor");
                            this.setFromColor(col1);
                        } else if (this.trans.childCount > 0) {
                            $t = Bridge.getEnumerator(this.trans);
                            try {
                                while ($t.moveNext()) {
                                    var child = Bridge.cast($t.Current, UnityEngine.Transform);
                                    if (UnityEngine.Component.op_Inequality(child.gameObject.GetComponent(UnityEngine.Renderer), null)) {
                                        var col2 = child.gameObject.GetComponent(UnityEngine.Renderer).material.color.$clone();
                                        this.setFromColor(col2);
                                        break;
                                    }
                                }
                            } finally {
                                if (Bridge.is($t, System.IDisposable)) {
                                    $t.System$IDisposable$Dispose();
                                }
                            }
                        }
                    }
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var toColor = LTDescr.tweenColor(this, LTDescr.val);


                    if (UnityEngine.Component.op_Inequality(this.spriteRen, null)) {
                        this.spriteRen.color = toColor.$clone();
                        LTDescr.colorRecursiveSprite(this.trans, toColor);
                    } else {
                        // Debug.Log("val:"+val+" tween:"+tween+" tween.diff:"+tween.diff);
                        if (this.type === TweenAction.COLOR) {
                            LTDescr.colorRecursive$1(this.trans, toColor, this.useRecursion);
                        }

                    }
                    if (LTDescr.dt !== 0.0 && !Bridge.staticEquals(this._optional.onUpdateColor, null)) {
                        this._optional.onUpdateColor(toColor.$clone());
                    } else if (LTDescr.dt !== 0.0 && !Bridge.staticEquals(this._optional.onUpdateColorObject, null)) {
                        this._optional.onUpdateColorObject(toColor.$clone(), this._optional.onUpdateParam);
                    }
                });
                return this;
            },
            /*LTDescr.setColor end.*/

            /*LTDescr.setCallbackColor start.*/
            setCallbackColor: function () {
                this.type = TweenAction.CALLBACK_COLOR;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.diff = new pc.Vec3( 1.0, 0.0, 0.0 );
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var toColor = LTDescr.tweenColor(this, LTDescr.val);

                    if (UnityEngine.Component.op_Inequality(this.spriteRen, null)) {
                        this.spriteRen.color = toColor.$clone();
                        LTDescr.colorRecursiveSprite(this.trans, toColor);
                    } else {
                        // Debug.Log("val:"+val+" tween:"+tween+" tween.diff:"+tween.diff);
                        if (this.type === TweenAction.COLOR) {
                            LTDescr.colorRecursive$1(this.trans, toColor, this.useRecursion);
                        }

                    }
                    if (LTDescr.dt !== 0.0 && !Bridge.staticEquals(this._optional.onUpdateColor, null)) {
                        this._optional.onUpdateColor(toColor.$clone());
                    } else if (LTDescr.dt !== 0.0 && !Bridge.staticEquals(this._optional.onUpdateColorObject, null)) {
                        this._optional.onUpdateColorObject(toColor.$clone(), this._optional.onUpdateParam);
                    }
                });
                return this;
            },
            /*LTDescr.setCallbackColor end.*/

            /*LTDescr.setTextColor start.*/
            setTextColor: function () {
                this.type = TweenAction.TEXT_COLOR;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.uiText = this.trans.GetComponent(UnityEngine.UI.Text);
                    this.setFromColor(UnityEngine.MonoBehaviour.op_Inequality(this.uiText, null) ? this.uiText.color.$clone() : new pc.Color( 1, 1, 1, 1 ));
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var toColor = LTDescr.tweenColor(this, LTDescr.val);
                    this.uiText.color = toColor.$clone();
                    if (LTDescr.dt !== 0.0 && !Bridge.staticEquals(this._optional.onUpdateColor, null)) {
                        this._optional.onUpdateColor(toColor.$clone());
                    }

                    if (this.useRecursion && this.trans.childCount > 0) {
                        LTDescr.textColorRecursive(this.trans, toColor);
                    }
                });
                return this;
            },
            /*LTDescr.setTextColor end.*/

            /*LTDescr.setCanvasAlpha start.*/
            setCanvasAlpha: function () {
                this.type = TweenAction.CANVAS_ALPHA;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.uiImage = this.trans.GetComponent(UnityEngine.UI.Image);
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.uiImage, null)) {
                        this.fromInternal.x = this.uiImage.color.a;
                    } else {
                        this.rawImage = this.trans.GetComponent(UnityEngine.UI.RawImage);
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.rawImage, null)) {
                            this.fromInternal.x = this.rawImage.color.a;
                        } else {
                            this.fromInternal.x = 1.0;
                        }
                    }

                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.uiImage, null)) {
                        var c = this.uiImage.color.$clone();
                        c.a = LTDescr.val;
                        this.uiImage.color = c.$clone();
                    } else if (UnityEngine.MonoBehaviour.op_Inequality(this.rawImage, null)) {
                        var c1 = this.rawImage.color.$clone();
                        c1.a = LTDescr.val;
                        this.rawImage.color = c1.$clone();
                    }
                    if (this.useRecursion) {
                        LTDescr.alphaRecursive(this.rectTransform, LTDescr.val, 0);
                        LTDescr.textAlphaChildrenRecursive(this.rectTransform, LTDescr.val);
                    }
                });
                return this;
            },
            /*LTDescr.setCanvasAlpha end.*/

            /*LTDescr.setCanvasGroupAlpha start.*/
            setCanvasGroupAlpha: function () {
                this.type = TweenAction.CANVASGROUP_ALPHA;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.GetComponent(UnityEngine.CanvasGroup).alpha;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.GetComponent(UnityEngine.CanvasGroup).alpha = this.easeMethod().x;
                });
                return this;
            },
            /*LTDescr.setCanvasGroupAlpha end.*/

            /*LTDescr.setCanvasColor start.*/
            setCanvasColor: function () {
                this.type = TweenAction.CANVAS_COLOR;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.uiImage = this.trans.GetComponent(UnityEngine.UI.Image);
                    if (UnityEngine.MonoBehaviour.op_Equality(this.uiImage, null)) {
                        this.rawImage = this.trans.GetComponent(UnityEngine.UI.RawImage);
                        this.setFromColor(UnityEngine.MonoBehaviour.op_Inequality(this.rawImage, null) ? this.rawImage.color.$clone() : new pc.Color( 1, 1, 1, 1 ));
                    } else {
                        this.setFromColor(this.uiImage.color);
                    }

                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var toColor = LTDescr.tweenColor(this, LTDescr.val);
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.uiImage, null)) {
                        this.uiImage.color = toColor.$clone();
                    } else if (UnityEngine.MonoBehaviour.op_Inequality(this.rawImage, null)) {
                        this.rawImage.color = toColor.$clone();
                    }

                    if (LTDescr.dt !== 0.0 && !Bridge.staticEquals(this._optional.onUpdateColor, null)) {
                        this._optional.onUpdateColor(toColor.$clone());
                    }

                    if (this.useRecursion) {
                        LTDescr.colorRecursive(this.rectTransform, toColor);
                    }
                });
                return this;
            },
            /*LTDescr.setCanvasColor end.*/

            /*LTDescr.setCanvasMoveX start.*/
            setCanvasMoveX: function () {
                this.type = TweenAction.CANVAS_MOVE_X;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.rectTransform.anchoredPosition3D.x;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    var c = this.rectTransform.anchoredPosition3D.$clone();
                    this.rectTransform.anchoredPosition3D = new pc.Vec3( this.easeMethod().x, c.y, c.z );
                });
                return this;
            },
            /*LTDescr.setCanvasMoveX end.*/

            /*LTDescr.setCanvasMoveY start.*/
            setCanvasMoveY: function () {
                this.type = TweenAction.CANVAS_MOVE_Y;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.rectTransform.anchoredPosition3D.y;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    var c = this.rectTransform.anchoredPosition3D.$clone();
                    this.rectTransform.anchoredPosition3D = new pc.Vec3( c.x, this.easeMethod().x, c.z );
                });
                return this;
            },
            /*LTDescr.setCanvasMoveY end.*/

            /*LTDescr.setCanvasMoveZ start.*/
            setCanvasMoveZ: function () {
                this.type = TweenAction.CANVAS_MOVE_Z;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.rectTransform.anchoredPosition3D.z;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    var c = this.rectTransform.anchoredPosition3D.$clone();
                    this.rectTransform.anchoredPosition3D = new pc.Vec3( c.x, c.y, this.easeMethod().x );
                });
                return this;
            },
            /*LTDescr.setCanvasMoveZ end.*/

            /*LTDescr.initCanvasRotateAround start.*/
            initCanvasRotateAround: function () {
                this.lastVal = 0.0;
                this.fromInternal.x = 0.0;
                this._optional.origRotation = this.rectTransform.rotation.$clone();
            },
            /*LTDescr.initCanvasRotateAround end.*/

            /*LTDescr.setCanvasRotateAround start.*/
            setCanvasRotateAround: function () {
                this.type = TweenAction.CANVAS_ROTATEAROUND;
                this.initInternal = Bridge.fn.cacheBind(this, this.initCanvasRotateAround);
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var rect = this.rectTransform;
                    var origPos = rect.localPosition.$clone();
                    rect.RotateAround(rect.TransformPoint$1(this._optional.point), this._optional.axis.$clone(), -LTDescr.val);
                    var diff = origPos.$clone().sub( rect.localPosition );

                    rect.localPosition = origPos.$clone().sub( diff ); // Subtract the amount the object has been shifted over by the rotate, to get it back to it's orginal position
                    rect.rotation = this._optional.origRotation.$clone();
                    rect.RotateAround(rect.TransformPoint$1(this._optional.point), this._optional.axis.$clone(), LTDescr.val);
                });
                return this;
            },
            /*LTDescr.setCanvasRotateAround end.*/

            /*LTDescr.setCanvasRotateAroundLocal start.*/
            setCanvasRotateAroundLocal: function () {
                this.type = TweenAction.CANVAS_ROTATEAROUND_LOCAL;
                this.initInternal = Bridge.fn.cacheBind(this, this.initCanvasRotateAround);
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var rect = this.rectTransform;
                    var origPos = rect.localPosition.$clone();
                    rect.RotateAround(rect.TransformPoint$1(this._optional.point), rect.TransformDirection$1(this._optional.axis.$clone()), -LTDescr.val);
                    var diff = origPos.$clone().sub( rect.localPosition );

                    rect.localPosition = origPos.$clone().sub( diff ); // Subtract the amount the object has been shifted over by the rotate, to get it back to it's orginal position
                    rect.rotation = this._optional.origRotation.$clone();
                    rect.RotateAround(rect.TransformPoint$1(this._optional.point), rect.TransformDirection$1(this._optional.axis.$clone()), LTDescr.val);
                });
                return this;
            },
            /*LTDescr.setCanvasRotateAroundLocal end.*/

            /*LTDescr.setCanvasPlaySprite start.*/
            setCanvasPlaySprite: function () {
                this.type = TweenAction.CANVAS_PLAYSPRITE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.uiImage = this.trans.GetComponent(UnityEngine.UI.Image);
                    this.fromInternal.x = 0.0;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var frame = Bridge.Int.clip32(Math.round(LTDescr.val));
                    this.uiImage.sprite = this.sprites[frame];
                });
                return this;
            },
            /*LTDescr.setCanvasPlaySprite end.*/

            /*LTDescr.setCanvasMove start.*/
            setCanvasMove: function () {
                this.type = TweenAction.CANVAS_MOVE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal = this.rectTransform.anchoredPosition3D.$clone();
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.rectTransform.anchoredPosition3D = this.easeMethod();
                });
                return this;
            },
            /*LTDescr.setCanvasMove end.*/

            /*LTDescr.setCanvasScale start.*/
            setCanvasScale: function () {
                this.type = TweenAction.CANVAS_SCALE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = this.rectTransform.localScale.$clone();
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.rectTransform.localScale = this.easeMethod();
                });
                return this;
            },
            /*LTDescr.setCanvasScale end.*/

            /*LTDescr.setCanvasSizeDelta start.*/
            setCanvasSizeDelta: function () {
                this.type = TweenAction.CANVAS_SIZEDELTA;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = UnityEngine.Vector3.FromVector2(this.rectTransform.sizeDelta.$clone());
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.rectTransform.sizeDelta = UnityEngine.Vector2.FromVector3(this.easeMethod());
                });
                return this;
            },
            /*LTDescr.setCanvasSizeDelta end.*/

            /*LTDescr.callback start.*/
            callback: function () {
                LTDescr.newVect = this.easeMethod();
                LTDescr.val = LTDescr.newVect.x;
            },
            /*LTDescr.callback end.*/

            /*LTDescr.setCallback start.*/
            setCallback: function () {
                this.type = TweenAction.CALLBACK;
                this.initInternal = function () { };
                this.easeInternal = Bridge.fn.cacheBind(this, this.callback);
                return this;
            },
            /*LTDescr.setCallback end.*/

            /*LTDescr.setValue3 start.*/
            setValue3: function () {
                this.type = TweenAction.VALUE3;
                this.initInternal = function () { };
                this.easeInternal = Bridge.fn.cacheBind(this, this.callback);
                return this;
            },
            /*LTDescr.setValue3 end.*/

            /*LTDescr.setMove start.*/
            setMove: function () {
                this.type = TweenAction.MOVE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = this.trans.position.$clone();
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    this.trans.position = LTDescr.newVect.$clone();
                });
                return this;
            },
            /*LTDescr.setMove end.*/

            /*LTDescr.setMoveLocal start.*/
            setMoveLocal: function () {
                this.type = TweenAction.MOVE_LOCAL;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = this.trans.localPosition.$clone();
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    this.trans.localPosition = LTDescr.newVect.$clone();
                });
                return this;
            },
            /*LTDescr.setMoveLocal end.*/

            /*LTDescr.setMoveToTransform start.*/
            setMoveToTransform: function () {
                this.type = TweenAction.MOVE_TO_TRANSFORM;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = this.trans.position.$clone();
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.to = this._optional.toTrans.position.$clone();
                    this.diff = this.to.$clone().sub( this.from );
                    this.diffDiv2 = this.diff.$clone().clone().scale( 0.5 );

                    LTDescr.newVect = this.easeMethod();
                    this.trans.position = LTDescr.newVect.$clone();
                });
                return this;
            },
            /*LTDescr.setMoveToTransform end.*/

            /*LTDescr.setRotate start.*/
            setRotate: function () {
                this.type = TweenAction.ROTATE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = this.trans.eulerAngles.$clone();
                    this.to = new pc.Vec3( LeanTween.closestRot(this.fromInternal.x, this.toInternal.x), LeanTween.closestRot(this.from.y, this.to.y), LeanTween.closestRot(this.from.z, this.to.z) );
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    this.trans.eulerAngles = LTDescr.newVect.$clone();
                });
                return this;
            },
            /*LTDescr.setRotate end.*/

            /*LTDescr.setRotateLocal start.*/
            setRotateLocal: function () {
                this.type = TweenAction.ROTATE_LOCAL;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = this.trans.localEulerAngles.$clone();
                    this.to = new pc.Vec3( LeanTween.closestRot(this.fromInternal.x, this.toInternal.x), LeanTween.closestRot(this.from.y, this.to.y), LeanTween.closestRot(this.from.z, this.to.z) );
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    this.trans.localEulerAngles = LTDescr.newVect.$clone();
                });
                return this;
            },
            /*LTDescr.setRotateLocal end.*/

            /*LTDescr.setScale start.*/
            setScale: function () {
                this.type = TweenAction.SCALE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = this.trans.localScale.$clone();
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    this.trans.localScale = LTDescr.newVect.$clone();
                });
                return this;
            },
            /*LTDescr.setScale end.*/

            /*LTDescr.setScale$1 start.*/
            setScale$1: function (scale) {
                this.scale = scale;
                return this;
            },
            /*LTDescr.setScale$1 end.*/

            /*LTDescr.setGUIMove start.*/
            setGUIMove: function () {
                this.type = TweenAction.GUI_MOVE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = new pc.Vec3( this._optional.ltRect.rect.x, this._optional.ltRect.rect.y, 0 );
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    var v = this.easeMethod();
                    this._optional.ltRect.rect = new UnityEngine.Rect.$ctor1(v.x, v.y, this._optional.ltRect.rect.width, this._optional.ltRect.rect.height);
                });
                return this;
            },
            /*LTDescr.setGUIMove end.*/

            /*LTDescr.setGUIMoveMargin start.*/
            setGUIMoveMargin: function () {
                this.type = TweenAction.GUI_MOVE_MARGIN;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = UnityEngine.Vector3.FromVector2(new pc.Vec2( this._optional.ltRect.margin.x, this._optional.ltRect.margin.y ));
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    var v = this.easeMethod();
                    this._optional.ltRect.margin = new pc.Vec2( v.x, v.y );
                });
                return this;
            },
            /*LTDescr.setGUIMoveMargin end.*/

            /*LTDescr.setGUIScale start.*/
            setGUIScale: function () {
                this.type = TweenAction.GUI_SCALE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = new pc.Vec3( this._optional.ltRect.rect.width, this._optional.ltRect.rect.height, 0 );
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    var v = this.easeMethod();
                    this._optional.ltRect.rect = new UnityEngine.Rect.$ctor1(this._optional.ltRect.rect.x, this._optional.ltRect.rect.y, v.x, v.y);
                });
                return this;
            },
            /*LTDescr.setGUIScale end.*/

            /*LTDescr.setGUIAlpha start.*/
            setGUIAlpha: function () {
                this.type = TweenAction.GUI_ALPHA;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this._optional.ltRect.alpha;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this._optional.ltRect.alpha = this.easeMethod().x;
                });
                return this;
            },
            /*LTDescr.setGUIAlpha end.*/

            /*LTDescr.setGUIRotate start.*/
            setGUIRotate: function () {
                this.type = TweenAction.GUI_ROTATE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    if (this._optional.ltRect.rotateEnabled === false) {
                        this._optional.ltRect.rotateEnabled = true;
                        this._optional.ltRect.resetForRotation();
                    }

                    this.fromInternal.x = this._optional.ltRect.rotation;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this._optional.ltRect.rotation = this.easeMethod().x;
                });
                return this;
            },
            /*LTDescr.setGUIRotate end.*/

            /*LTDescr.setDelayedSound start.*/
            setDelayedSound: function () {
                this.type = TweenAction.DELAYED_SOUND;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.hasExtraOnCompletes = true;
                });
                this.easeInternal = Bridge.fn.cacheBind(this, this.callback);
                return this;
            },
            /*LTDescr.setDelayedSound end.*/

            /*LTDescr.setTarget start.*/
            setTarget: function (trans) {
                this.optional.toTrans = trans;
                return this;
            },
            /*LTDescr.setTarget end.*/

            /*LTDescr.init start.*/
            init: function () {
                this.hasInitiliazed = true;

                this.usesNormalDt = !(this.useEstimatedTime || this.useManualTime || this.useFrames); // only set this to true if it uses non of the other timing modes

                if (this.useFrames) {
                    this.optional.initFrameCount = UnityEngine.Time.frameCount;
                }

                if (this.time <= 0.0) {
                    this.time = Number.EPSILON;
                }

                if (!Bridge.staticEquals(this.initInternal, null)) {
                    this.initInternal();
                }

                this.diff = this.to.$clone().sub( this.from );
                this.diffDiv2 = this.diff.$clone().clone().scale( 0.5 );

                if (!Bridge.staticEquals(this._optional.onStart, null)) {
                    this._optional.onStart();
                }

                if (this.onCompleteOnStart) {
                    this.callOnCompletes();
                }

                if (this.speed >= 0) {
                    this.initSpeed();
                }
            },
            /*LTDescr.init end.*/

            /*LTDescr.initSpeed start.*/
            initSpeed: function () {
                if (this.type === TweenAction.MOVE_CURVED || this.type === TweenAction.MOVE_CURVED_LOCAL) {
                    this.time = this._optional.path.distance / this.speed;
                } else if (this.type === TweenAction.MOVE_SPLINE || this.type === TweenAction.MOVE_SPLINE_LOCAL) {
                    this.time = this._optional.spline.distance / this.speed;
                } else {
                    this.time = (this.to.$clone().sub( this.from )).length() / this.speed;
                }
            },
            /*LTDescr.initSpeed end.*/

            /*LTDescr.updateNow start.*/
            updateNow: function () {
                this.updateInternal();
                return this;
            },
            /*LTDescr.updateNow end.*/

            /*LTDescr.updateInternal start.*/
            updateInternal: function () {

                var directionLocal = this.direction;
                if (this.usesNormalDt) {
                    LTDescr.dt = LeanTween.dtActual;
                } else if (this.useEstimatedTime) {
                    LTDescr.dt = LeanTween.dtEstimated;
                } else if (this.useFrames) {
                    LTDescr.dt = this.optional.initFrameCount === 0 ? 0 : 1;
                    this.optional.initFrameCount = UnityEngine.Time.frameCount;
                } else if (this.useManualTime) {
                    LTDescr.dt = LeanTween.dtManual;
                }

                //		Debug.Log ("tween:" + this+ " dt:"+dt);
                if (this.delay <= 0.0 && directionLocal !== 0.0) {
                    if (UnityEngine.Component.op_Equality(this.trans, null)) {
                        return true;
                    }

                    // initialize if has not done so yet
                    if (!this.hasInitiliazed) {
                        this.init();
                    }

                    LTDescr.dt = LTDescr.dt * directionLocal;
                    this.passed += LTDescr.dt;

                    this.passed = Math.max(0.0, Math.min(this.passed, this.time));

                    this.ratioPassed = (this.passed / this.time); // need to clamp when finished so it will finish at the exact spot and not overshoot

                    this.easeInternal();

                    if (this.hasUpdateCallback) {
                        this._optional.callOnUpdate(LTDescr.val, this.ratioPassed);
                    }

                    var isTweenFinished = directionLocal > 0.0 ? this.passed >= this.time : this.passed <= 0.0;
                    //			Debug.Log("lt "+this+" dt:"+dt+" fin:"+isTweenFinished);
                    if (isTweenFinished) { // increment or flip tween
                        this.loopCount = (this.loopCount - 1) | 0;
                        if (this.loopType === LeanTweenType.pingPong) {
                            this.direction = 0.0 - directionLocal;
                        } else {
                            this.passed = Number.EPSILON;
                        }

                        isTweenFinished = this.loopCount === 0 || this.loopType === LeanTweenType.once; // only return true if it is fully complete

                        if (isTweenFinished === false && this.onCompleteOnRepeat && this.hasExtraOnCompletes) {
                            this.callOnCompletes();
                        } // this only gets called if onCompleteOnRepeat is set to true, otherwise LeanTween class takes care of calling it

                        return isTweenFinished;
                    }
                } else {
                    this.delay -= LTDescr.dt;
                }

                return false;
            },
            /*LTDescr.updateInternal end.*/

            /*LTDescr.callOnCompletes start.*/
            callOnCompletes: function () {
                if (this.type === TweenAction.GUI_ROTATE) {
                    this._optional.ltRect.rotateFinished = true;
                }

                if (this.type === TweenAction.DELAYED_SOUND) {
                    UnityEngine.AudioSource.PlayClipAtPoint(Bridge.cast(this._optional.onCompleteParam, UnityEngine.AudioClip), this.to, this.from.x);
                }
                if (!Bridge.staticEquals(this._optional.onComplete, null)) {
                    this._optional.onComplete();
                } else if (!Bridge.staticEquals(this._optional.onCompleteObject, null)) {
                    this._optional.onCompleteObject(this._optional.onCompleteParam);
                }
            },
            /*LTDescr.callOnCompletes end.*/

            /*LTDescr.setFromColor start.*/
            setFromColor: function (col) {
                this.from = new pc.Vec3( 0.0, col.a, 0.0 );
                this.diff = new pc.Vec3( 1.0, 0.0, 0.0 );
                this._optional.axis = new pc.Vec3( col.r, col.g, col.b );
                return this;
            },
            /*LTDescr.setFromColor end.*/

            /*LTDescr.pause start.*/
            pause: function () {
                if (this.direction !== 0.0) { // check if tween is already paused
                    this.directionLast = this.direction;
                    this.direction = 0.0;
                }

                return this;
            },
            /*LTDescr.pause end.*/

            /*LTDescr.resume start.*/
            resume: function () {
                this.direction = this.directionLast;

                return this;
            },
            /*LTDescr.resume end.*/

            /*LTDescr.setAxis start.*/
            setAxis: function (axis) {
                this._optional.axis = axis.$clone();
                return this;
            },
            /*LTDescr.setAxis end.*/

            /*LTDescr.setDelay start.*/
            setDelay: function (delay) {
                this.delay = delay;

                return this;
            },
            /*LTDescr.setDelay end.*/

            /*LTDescr.setEase start.*/
            setEase: function (easeType) {

                switch (easeType) {
                    case LeanTweenType.linear: 
                        this.setEaseLinear();
                        break;
                    case LeanTweenType.easeOutQuad: 
                        this.setEaseOutQuad();
                        break;
                    case LeanTweenType.easeInQuad: 
                        this.setEaseInQuad();
                        break;
                    case LeanTweenType.easeInOutQuad: 
                        this.setEaseInOutQuad();
                        break;
                    case LeanTweenType.easeInCubic: 
                        this.setEaseInCubic();
                        break;
                    case LeanTweenType.easeOutCubic: 
                        this.setEaseOutCubic();
                        break;
                    case LeanTweenType.easeInOutCubic: 
                        this.setEaseInOutCubic();
                        break;
                    case LeanTweenType.easeInQuart: 
                        this.setEaseInQuart();
                        break;
                    case LeanTweenType.easeOutQuart: 
                        this.setEaseOutQuart();
                        break;
                    case LeanTweenType.easeInOutQuart: 
                        this.setEaseInOutQuart();
                        break;
                    case LeanTweenType.easeInQuint: 
                        this.setEaseInQuint();
                        break;
                    case LeanTweenType.easeOutQuint: 
                        this.setEaseOutQuint();
                        break;
                    case LeanTweenType.easeInOutQuint: 
                        this.setEaseInOutQuint();
                        break;
                    case LeanTweenType.easeInSine: 
                        this.setEaseInSine();
                        break;
                    case LeanTweenType.easeOutSine: 
                        this.setEaseOutSine();
                        break;
                    case LeanTweenType.easeInOutSine: 
                        this.setEaseInOutSine();
                        break;
                    case LeanTweenType.easeInExpo: 
                        this.setEaseInExpo();
                        break;
                    case LeanTweenType.easeOutExpo: 
                        this.setEaseOutExpo();
                        break;
                    case LeanTweenType.easeInOutExpo: 
                        this.setEaseInOutExpo();
                        break;
                    case LeanTweenType.easeInCirc: 
                        this.setEaseInCirc();
                        break;
                    case LeanTweenType.easeOutCirc: 
                        this.setEaseOutCirc();
                        break;
                    case LeanTweenType.easeInOutCirc: 
                        this.setEaseInOutCirc();
                        break;
                    case LeanTweenType.easeInBounce: 
                        this.setEaseInBounce();
                        break;
                    case LeanTweenType.easeOutBounce: 
                        this.setEaseOutBounce();
                        break;
                    case LeanTweenType.easeInOutBounce: 
                        this.setEaseInOutBounce();
                        break;
                    case LeanTweenType.easeInBack: 
                        this.setEaseInBack();
                        break;
                    case LeanTweenType.easeOutBack: 
                        this.setEaseOutBack();
                        break;
                    case LeanTweenType.easeInOutBack: 
                        this.setEaseInOutBack();
                        break;
                    case LeanTweenType.easeInElastic: 
                        this.setEaseInElastic();
                        break;
                    case LeanTweenType.easeOutElastic: 
                        this.setEaseOutElastic();
                        break;
                    case LeanTweenType.easeInOutElastic: 
                        this.setEaseInOutElastic();
                        break;
                    case LeanTweenType.punch: 
                        this.setEasePunch();
                        break;
                    case LeanTweenType.easeShake: 
                        this.setEaseShake();
                        break;
                    case LeanTweenType.easeSpring: 
                        this.setEaseSpring();
                        break;
                    default: 
                        this.setEaseLinear();
                        break;
                }

                return this;
            },
            /*LTDescr.setEase end.*/

            /*LTDescr.setEase$1 start.*/
            setEase$1: function (easeCurve) {
                this._optional.animationCurve = easeCurve;
                this.easeMethod = Bridge.fn.cacheBind(this, this.tweenOnCurve);
                this.easeType = LeanTweenType.animationCurve;
                return this;
            },
            /*LTDescr.setEase$1 end.*/

            /*LTDescr.setEaseLinear start.*/
            setEaseLinear: function () {
                this.easeType = LeanTweenType.linear;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeLinear);
                return this;
            },
            /*LTDescr.setEaseLinear end.*/

            /*LTDescr.setEaseSpring start.*/
            setEaseSpring: function () {
                this.easeType = LeanTweenType.easeSpring;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeSpring);
                return this;
            },
            /*LTDescr.setEaseSpring end.*/

            /*LTDescr.setEaseInQuad start.*/
            setEaseInQuad: function () {
                this.easeType = LeanTweenType.easeInQuad;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInQuad);
                return this;
            },
            /*LTDescr.setEaseInQuad end.*/

            /*LTDescr.setEaseOutQuad start.*/
            setEaseOutQuad: function () {
                this.easeType = LeanTweenType.easeOutQuad;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutQuad);
                return this;
            },
            /*LTDescr.setEaseOutQuad end.*/

            /*LTDescr.setEaseInOutQuad start.*/
            setEaseInOutQuad: function () {
                this.easeType = LeanTweenType.easeInOutQuad;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutQuad);
                return this;
            },
            /*LTDescr.setEaseInOutQuad end.*/

            /*LTDescr.setEaseInCubic start.*/
            setEaseInCubic: function () {
                this.easeType = LeanTweenType.easeInCubic;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInCubic);
                return this;
            },
            /*LTDescr.setEaseInCubic end.*/

            /*LTDescr.setEaseOutCubic start.*/
            setEaseOutCubic: function () {
                this.easeType = LeanTweenType.easeOutCubic;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutCubic);
                return this;
            },
            /*LTDescr.setEaseOutCubic end.*/

            /*LTDescr.setEaseInOutCubic start.*/
            setEaseInOutCubic: function () {
                this.easeType = LeanTweenType.easeInOutCubic;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutCubic);
                return this;
            },
            /*LTDescr.setEaseInOutCubic end.*/

            /*LTDescr.setEaseInQuart start.*/
            setEaseInQuart: function () {
                this.easeType = LeanTweenType.easeInQuart;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInQuart);
                return this;
            },
            /*LTDescr.setEaseInQuart end.*/

            /*LTDescr.setEaseOutQuart start.*/
            setEaseOutQuart: function () {
                this.easeType = LeanTweenType.easeOutQuart;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutQuart);
                return this;
            },
            /*LTDescr.setEaseOutQuart end.*/

            /*LTDescr.setEaseInOutQuart start.*/
            setEaseInOutQuart: function () {
                this.easeType = LeanTweenType.easeInOutQuart;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutQuart);
                return this;
            },
            /*LTDescr.setEaseInOutQuart end.*/

            /*LTDescr.setEaseInQuint start.*/
            setEaseInQuint: function () {
                this.easeType = LeanTweenType.easeInQuint;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInQuint);
                return this;
            },
            /*LTDescr.setEaseInQuint end.*/

            /*LTDescr.setEaseOutQuint start.*/
            setEaseOutQuint: function () {
                this.easeType = LeanTweenType.easeOutQuint;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutQuint);
                return this;
            },
            /*LTDescr.setEaseOutQuint end.*/

            /*LTDescr.setEaseInOutQuint start.*/
            setEaseInOutQuint: function () {
                this.easeType = LeanTweenType.easeInOutQuint;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutQuint);
                return this;
            },
            /*LTDescr.setEaseInOutQuint end.*/

            /*LTDescr.setEaseInSine start.*/
            setEaseInSine: function () {
                this.easeType = LeanTweenType.easeInSine;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInSine);
                return this;
            },
            /*LTDescr.setEaseInSine end.*/

            /*LTDescr.setEaseOutSine start.*/
            setEaseOutSine: function () {
                this.easeType = LeanTweenType.easeOutSine;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutSine);
                return this;
            },
            /*LTDescr.setEaseOutSine end.*/

            /*LTDescr.setEaseInOutSine start.*/
            setEaseInOutSine: function () {
                this.easeType = LeanTweenType.easeInOutSine;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutSine);
                return this;
            },
            /*LTDescr.setEaseInOutSine end.*/

            /*LTDescr.setEaseInExpo start.*/
            setEaseInExpo: function () {
                this.easeType = LeanTweenType.easeInExpo;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInExpo);
                return this;
            },
            /*LTDescr.setEaseInExpo end.*/

            /*LTDescr.setEaseOutExpo start.*/
            setEaseOutExpo: function () {
                this.easeType = LeanTweenType.easeOutExpo;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutExpo);
                return this;
            },
            /*LTDescr.setEaseOutExpo end.*/

            /*LTDescr.setEaseInOutExpo start.*/
            setEaseInOutExpo: function () {
                this.easeType = LeanTweenType.easeInOutExpo;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutExpo);
                return this;
            },
            /*LTDescr.setEaseInOutExpo end.*/

            /*LTDescr.setEaseInCirc start.*/
            setEaseInCirc: function () {
                this.easeType = LeanTweenType.easeInCirc;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInCirc);
                return this;
            },
            /*LTDescr.setEaseInCirc end.*/

            /*LTDescr.setEaseOutCirc start.*/
            setEaseOutCirc: function () {
                this.easeType = LeanTweenType.easeOutCirc;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutCirc);
                return this;
            },
            /*LTDescr.setEaseOutCirc end.*/

            /*LTDescr.setEaseInOutCirc start.*/
            setEaseInOutCirc: function () {
                this.easeType = LeanTweenType.easeInOutCirc;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutCirc);
                return this;
            },
            /*LTDescr.setEaseInOutCirc end.*/

            /*LTDescr.setEaseInBounce start.*/
            setEaseInBounce: function () {
                this.easeType = LeanTweenType.easeInBounce;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInBounce);
                return this;
            },
            /*LTDescr.setEaseInBounce end.*/

            /*LTDescr.setEaseOutBounce start.*/
            setEaseOutBounce: function () {
                this.easeType = LeanTweenType.easeOutBounce;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutBounce);
                return this;
            },
            /*LTDescr.setEaseOutBounce end.*/

            /*LTDescr.setEaseInOutBounce start.*/
            setEaseInOutBounce: function () {
                this.easeType = LeanTweenType.easeInOutBounce;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutBounce);
                return this;
            },
            /*LTDescr.setEaseInOutBounce end.*/

            /*LTDescr.setEaseInBack start.*/
            setEaseInBack: function () {
                this.easeType = LeanTweenType.easeInBack;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInBack);
                return this;
            },
            /*LTDescr.setEaseInBack end.*/

            /*LTDescr.setEaseOutBack start.*/
            setEaseOutBack: function () {
                this.easeType = LeanTweenType.easeOutBack;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutBack);
                return this;
            },
            /*LTDescr.setEaseOutBack end.*/

            /*LTDescr.setEaseInOutBack start.*/
            setEaseInOutBack: function () {
                this.easeType = LeanTweenType.easeInOutBack;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutBack);
                return this;
            },
            /*LTDescr.setEaseInOutBack end.*/

            /*LTDescr.setEaseInElastic start.*/
            setEaseInElastic: function () {
                this.easeType = LeanTweenType.easeInElastic;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInElastic);
                return this;
            },
            /*LTDescr.setEaseInElastic end.*/

            /*LTDescr.setEaseOutElastic start.*/
            setEaseOutElastic: function () {
                this.easeType = LeanTweenType.easeOutElastic;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutElastic);
                return this;
            },
            /*LTDescr.setEaseOutElastic end.*/

            /*LTDescr.setEaseInOutElastic start.*/
            setEaseInOutElastic: function () {
                this.easeType = LeanTweenType.easeInOutElastic;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutElastic);
                return this;
            },
            /*LTDescr.setEaseInOutElastic end.*/

            /*LTDescr.setEasePunch start.*/
            setEasePunch: function () {
                this._optional.animationCurve = LeanTween.punch;
                this.toInternal.x = this.from.x + this.to.x;
                this.easeMethod = Bridge.fn.cacheBind(this, this.tweenOnCurve);
                return this;
            },
            /*LTDescr.setEasePunch end.*/

            /*LTDescr.setEaseShake start.*/
            setEaseShake: function () {
                this._optional.animationCurve = LeanTween.shake;
                this.toInternal.x = this.from.x + this.to.x;
                this.easeMethod = Bridge.fn.cacheBind(this, this.tweenOnCurve);
                return this;
            },
            /*LTDescr.setEaseShake end.*/

            /*LTDescr.tweenOnCurve start.*/
            tweenOnCurve: function () {
                return new pc.Vec3( this.from.x + (this.diff.x) * this._optional.animationCurve.value(this.ratioPassed), this.from.y + (this.diff.y) * this._optional.animationCurve.value(this.ratioPassed), this.from.z + (this.diff.z) * this._optional.animationCurve.value(this.ratioPassed) );
            },
            /*LTDescr.tweenOnCurve end.*/

            /*LTDescr.easeInOutQuad start.*/
            easeInOutQuad: function () {
                LTDescr.val = this.ratioPassed * 2.0;

                if (LTDescr.val < 1.0) {
                    LTDescr.val = LTDescr.val * LTDescr.val;
                    return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
                }
                LTDescr.val = (1.0 - LTDescr.val) * (LTDescr.val - 3.0) + 1.0;
                return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInOutQuad end.*/

            /*LTDescr.easeInQuad start.*/
            easeInQuad: function () {
                LTDescr.val = this.ratioPassed * this.ratioPassed;
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInQuad end.*/

            /*LTDescr.easeOutQuad start.*/
            easeOutQuad: function () {
                LTDescr.val = this.ratioPassed;
                LTDescr.val = -LTDescr.val * (LTDescr.val - 2.0);
                return (this.diff.$clone().clone().scale( LTDescr.val ).add( this.from ));
            },
            /*LTDescr.easeOutQuad end.*/

            /*LTDescr.easeLinear start.*/
            easeLinear: function () {
                LTDescr.val = this.ratioPassed;
                return new pc.Vec3( this.from.x + this.diff.x * LTDescr.val, this.from.y + this.diff.y * LTDescr.val, this.from.z + this.diff.z * LTDescr.val );
            },
            /*LTDescr.easeLinear end.*/

            /*LTDescr.easeSpring start.*/
            easeSpring: function () {
                LTDescr.val = Math.max(0, Math.min(1, this.ratioPassed));
                LTDescr.val = (Math.sin(LTDescr.val * UnityEngine.Mathf.PI * (0.2 + 2.5 * LTDescr.val * LTDescr.val * LTDescr.val)) * Math.pow(1.0 - LTDescr.val, 2.2) + LTDescr.val) * (1.0 + (1.2 * (1.0 - LTDescr.val)));
                return this.from.$clone().add( this.diff.$clone().clone().scale( LTDescr.val ) );
            },
            /*LTDescr.easeSpring end.*/

            /*LTDescr.easeInCubic start.*/
            easeInCubic: function () {
                LTDescr.val = this.ratioPassed * this.ratioPassed * this.ratioPassed;
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInCubic end.*/

            /*LTDescr.easeOutCubic start.*/
            easeOutCubic: function () {
                LTDescr.val = this.ratioPassed - 1.0;
                LTDescr.val = (LTDescr.val * LTDescr.val * LTDescr.val + 1);
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeOutCubic end.*/

            /*LTDescr.easeInOutCubic start.*/
            easeInOutCubic: function () {
                LTDescr.val = this.ratioPassed * 2.0;
                if (LTDescr.val < 1.0) {
                    LTDescr.val = LTDescr.val * LTDescr.val * LTDescr.val;
                    return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
                }
                LTDescr.val -= 2.0;
                LTDescr.val = LTDescr.val * LTDescr.val * LTDescr.val + 2.0;
                return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInOutCubic end.*/

            /*LTDescr.easeInQuart start.*/
            easeInQuart: function () {
                LTDescr.val = this.ratioPassed * this.ratioPassed * this.ratioPassed * this.ratioPassed;
                return this.diff.$clone().clone().scale( LTDescr.val ).add( this.from );
            },
            /*LTDescr.easeInQuart end.*/

            /*LTDescr.easeOutQuart start.*/
            easeOutQuart: function () {
                LTDescr.val = this.ratioPassed - 1.0;
                LTDescr.val = -(LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val - 1);
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeOutQuart end.*/

            /*LTDescr.easeInOutQuart start.*/
            easeInOutQuart: function () {
                LTDescr.val = this.ratioPassed * 2.0;
                if (LTDescr.val < 1.0) {
                    LTDescr.val = LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val;
                    return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
                }
                LTDescr.val -= 2.0;
                //		val = (val * val * val * val - 2f);
                return this.diffDiv2.$clone().scale( -1 ).clone().scale( (LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val - 2.0) ).add( this.from );
            },
            /*LTDescr.easeInOutQuart end.*/

            /*LTDescr.easeInQuint start.*/
            easeInQuint: function () {
                LTDescr.val = this.ratioPassed;
                LTDescr.val = LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val;
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInQuint end.*/

            /*LTDescr.easeOutQuint start.*/
            easeOutQuint: function () {
                LTDescr.val = this.ratioPassed - 1.0;
                LTDescr.val = (LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val + 1.0);
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeOutQuint end.*/

            /*LTDescr.easeInOutQuint start.*/
            easeInOutQuint: function () {
                LTDescr.val = this.ratioPassed * 2.0;
                if (LTDescr.val < 1.0) {
                    LTDescr.val = LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val;
                    return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
                }
                LTDescr.val -= 2.0;
                LTDescr.val = (LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val + 2.0);
                return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInOutQuint end.*/

            /*LTDescr.easeInSine start.*/
            easeInSine: function () {
                LTDescr.val = -Math.cos(this.ratioPassed * LeanTween.PI_DIV2);
                return new pc.Vec3( this.diff.x * LTDescr.val + this.diff.x + this.from.x, this.diff.y * LTDescr.val + this.diff.y + this.from.y, this.diff.z * LTDescr.val + this.diff.z + this.from.z );
            },
            /*LTDescr.easeInSine end.*/

            /*LTDescr.easeOutSine start.*/
            easeOutSine: function () {
                LTDescr.val = Math.sin(this.ratioPassed * LeanTween.PI_DIV2);
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeOutSine end.*/

            /*LTDescr.easeInOutSine start.*/
            easeInOutSine: function () {
                LTDescr.val = -(Math.cos(UnityEngine.Mathf.PI * this.ratioPassed) - 1.0);
                return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInOutSine end.*/

            /*LTDescr.easeInExpo start.*/
            easeInExpo: function () {
                LTDescr.val = Math.pow(2.0, 10.0 * (this.ratioPassed - 1.0));
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInExpo end.*/

            /*LTDescr.easeOutExpo start.*/
            easeOutExpo: function () {
                LTDescr.val = (-Math.pow(2.0, -10.0 * this.ratioPassed) + 1.0);
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeOutExpo end.*/

            /*LTDescr.easeInOutExpo start.*/
            easeInOutExpo: function () {
                LTDescr.val = this.ratioPassed * 2.0;
                if (LTDescr.val < 1) {
                    return this.diffDiv2.$clone().clone().scale( Math.pow(2, 10 * (LTDescr.val - 1)) ).add( this.from );
                }
                LTDescr.val--;
                return this.diffDiv2.$clone().clone().scale( (-Math.pow(2, -10 * LTDescr.val) + 2) ).add( this.from );
            },
            /*LTDescr.easeInOutExpo end.*/

            /*LTDescr.easeInCirc start.*/
            easeInCirc: function () {
                LTDescr.val = -(Math.sqrt(1.0 - this.ratioPassed * this.ratioPassed) - 1.0);
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInCirc end.*/

            /*LTDescr.easeOutCirc start.*/
            easeOutCirc: function () {
                LTDescr.val = this.ratioPassed - 1.0;
                LTDescr.val = Math.sqrt(1.0 - LTDescr.val * LTDescr.val);

                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeOutCirc end.*/

            /*LTDescr.easeInOutCirc start.*/
            easeInOutCirc: function () {
                LTDescr.val = this.ratioPassed * 2.0;
                if (LTDescr.val < 1.0) {
                    LTDescr.val = -(Math.sqrt(1.0 - LTDescr.val * LTDescr.val) - 1.0);
                    return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
                }
                LTDescr.val -= 2.0;
                LTDescr.val = (Math.sqrt(1.0 - LTDescr.val * LTDescr.val) + 1.0);
                return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInOutCirc end.*/

            /*LTDescr.easeInBounce start.*/
            easeInBounce: function () {
                LTDescr.val = this.ratioPassed;
                LTDescr.val = 1.0 - LTDescr.val;
                return new pc.Vec3( this.diff.x - LeanTween.easeOutBounce(0, this.diff.x, LTDescr.val) + this.from.x, this.diff.y - LeanTween.easeOutBounce(0, this.diff.y, LTDescr.val) + this.from.y, this.diff.z - LeanTween.easeOutBounce(0, this.diff.z, LTDescr.val) + this.from.z );
            },
            /*LTDescr.easeInBounce end.*/

            /*LTDescr.easeOutBounce start.*/
            easeOutBounce: function () {
                LTDescr.val = this.ratioPassed;
                var valM, valN; // bounce values
                if (LTDescr.val < ((valM = 1 - 1.75 * this.overshoot / 2.75))) {
                    LTDescr.val = 1 / valM / valM * LTDescr.val * LTDescr.val;
                } else if (LTDescr.val < ((valN = 1 - 0.75 * this.overshoot / 2.75))) {
                    LTDescr.val -= (valM + valN) / 2;
                    // first bounce, height: 1/4
                    LTDescr.val = 7.5625 * LTDescr.val * LTDescr.val + 1 - 0.25 * this.overshoot * this.overshoot;
                } else if (LTDescr.val < ((valM = 1 - 0.25 * this.overshoot / 2.75))) {
                    LTDescr.val -= (valM + valN) / 2;
                    // second bounce, height: 1/16
                    LTDescr.val = 7.5625 * LTDescr.val * LTDescr.val + 1 - 0.0625 * this.overshoot * this.overshoot;
                } else { // valN = 1
                    LTDescr.val -= (valM + 1) / 2;
                    // third bounce, height: 1/64
                    LTDescr.val = 7.5625 * LTDescr.val * LTDescr.val + 1 - 0.015625 * this.overshoot * this.overshoot;
                }
                return this.diff.$clone().clone().scale( LTDescr.val ).add( this.from );
            },
            /*LTDescr.easeOutBounce end.*/

            /*LTDescr.easeInOutBounce start.*/
            easeInOutBounce: function () {
                LTDescr.val = this.ratioPassed * 2.0;
                if (LTDescr.val < 1.0) {
                    return new pc.Vec3( LeanTween.easeInBounce(0, this.diff.x, LTDescr.val) * 0.5 + this.from.x, LeanTween.easeInBounce(0, this.diff.y, LTDescr.val) * 0.5 + this.from.y, LeanTween.easeInBounce(0, this.diff.z, LTDescr.val) * 0.5 + this.from.z );
                } else {
                    LTDescr.val = LTDescr.val - 1.0;
                    return new pc.Vec3( LeanTween.easeOutBounce(0, this.diff.x, LTDescr.val) * 0.5 + this.diffDiv2.x + this.from.x, LeanTween.easeOutBounce(0, this.diff.y, LTDescr.val) * 0.5 + this.diffDiv2.y + this.from.y, LeanTween.easeOutBounce(0, this.diff.z, LTDescr.val) * 0.5 + this.diffDiv2.z + this.from.z );
                }
            },
            /*LTDescr.easeInOutBounce end.*/

            /*LTDescr.easeInBack start.*/
            easeInBack: function () {
                LTDescr.val = this.ratioPassed;
                LTDescr.val /= 1;
                var s = 1.70158 * this.overshoot;
                return this.diff.$clone().clone().scale( (LTDescr.val) ).clone().scale( LTDescr.val ).clone().scale( ((s + 1) * LTDescr.val - s) ).add( this.from );
            },
            /*LTDescr.easeInBack end.*/

            /*LTDescr.easeOutBack start.*/
            easeOutBack: function () {
                var s = 1.70158 * this.overshoot;
                LTDescr.val = (this.ratioPassed / 1) - 1;
                LTDescr.val = ((LTDescr.val) * LTDescr.val * ((s + 1) * LTDescr.val + s) + 1);
                return this.diff.$clone().clone().scale( LTDescr.val ).add( this.from );
            },
            /*LTDescr.easeOutBack end.*/

            /*LTDescr.easeInOutBack start.*/
            easeInOutBack: function () {
                var s = 1.70158 * this.overshoot;
                LTDescr.val = this.ratioPassed * 2.0;
                if ((LTDescr.val) < 1) {
                    s *= (1.525) * this.overshoot;
                    return this.diffDiv2.$clone().clone().scale( (LTDescr.val * LTDescr.val * (((s) + 1) * LTDescr.val - s)) ).add( this.from );
                }
                LTDescr.val -= 2;
                s *= (1.525) * this.overshoot;
                LTDescr.val = ((LTDescr.val) * LTDescr.val * (((s) + 1) * LTDescr.val + s) + 2);
                return this.diffDiv2.$clone().clone().scale( LTDescr.val ).add( this.from );
            },
            /*LTDescr.easeInOutBack end.*/

            /*LTDescr.easeInElastic start.*/
            easeInElastic: function () {
                return new pc.Vec3( LeanTween.easeInElastic(this.from.x, this.to.x, this.ratioPassed, this.overshoot, this.period), LeanTween.easeInElastic(this.from.y, this.to.y, this.ratioPassed, this.overshoot, this.period), LeanTween.easeInElastic(this.from.z, this.to.z, this.ratioPassed, this.overshoot, this.period) );
            },
            /*LTDescr.easeInElastic end.*/

            /*LTDescr.easeOutElastic start.*/
            easeOutElastic: function () {
                return new pc.Vec3( LeanTween.easeOutElastic(this.from.x, this.to.x, this.ratioPassed, this.overshoot, this.period), LeanTween.easeOutElastic(this.from.y, this.to.y, this.ratioPassed, this.overshoot, this.period), LeanTween.easeOutElastic(this.from.z, this.to.z, this.ratioPassed, this.overshoot, this.period) );
            },
            /*LTDescr.easeOutElastic end.*/

            /*LTDescr.easeInOutElastic start.*/
            easeInOutElastic: function () {
                return new pc.Vec3( LeanTween.easeInOutElastic(this.from.x, this.to.x, this.ratioPassed, this.overshoot, this.period), LeanTween.easeInOutElastic(this.from.y, this.to.y, this.ratioPassed, this.overshoot, this.period), LeanTween.easeInOutElastic(this.from.z, this.to.z, this.ratioPassed, this.overshoot, this.period) );
            },
            /*LTDescr.easeInOutElastic end.*/

            /*LTDescr.setOvershoot start.*/
            setOvershoot: function (overshoot) {
                this.overshoot = overshoot;
                return this;
            },
            /*LTDescr.setOvershoot end.*/

            /*LTDescr.setPeriod start.*/
            setPeriod: function (period) {
                this.period = period;
                return this;
            },
            /*LTDescr.setPeriod end.*/

            /*LTDescr.setTo$1 start.*/
            setTo$1: function (to) {
                if (this.hasInitiliazed) {
                    this.to = to.$clone();
                    this.diff = to.$clone().sub( this.from );
                } else {
                    this.to = to.$clone();
                }

                return this;
            },
            /*LTDescr.setTo$1 end.*/

            /*LTDescr.setTo start.*/
            setTo: function (to) {
                this._optional.toTrans = to;
                return this;
            },
            /*LTDescr.setTo end.*/

            /*LTDescr.setFrom$1 start.*/
            setFrom$1: function (from) {
                if (UnityEngine.Object.op_Implicit(this.trans)) {
                    this.init();
                }
                this.from = from.$clone();
                // this.hasInitiliazed = true; // this is set, so that the "from" value isn't overwritten later on when the tween starts
                this.diff = this.to.$clone().sub( this.from );
                this.diffDiv2 = this.diff.$clone().clone().scale( 0.5 );
                return this;
            },
            /*LTDescr.setFrom$1 end.*/

            /*LTDescr.setFrom start.*/
            setFrom: function (from) {
                return this.setFrom$1(new pc.Vec3( from, 0.0, 0.0 ));
            },
            /*LTDescr.setFrom end.*/

            /*LTDescr.setDiff start.*/
            setDiff: function (diff) {
                this.diff = diff.$clone();
                return this;
            },
            /*LTDescr.setDiff end.*/

            /*LTDescr.setHasInitialized start.*/
            setHasInitialized: function (has) {
                this.hasInitiliazed = has;
                return this;
            },
            /*LTDescr.setHasInitialized end.*/

            /*LTDescr.setId start.*/
            setId: function (id, global_counter) {
                this._id = id;
                this.counter = global_counter;
                // Debug.Log("Global counter:"+global_counter);
                return this;
            },
            /*LTDescr.setId end.*/

            /*LTDescr.setPassed start.*/
            setPassed: function (passed) {
                this.passed = passed;
                return this;
            },
            /*LTDescr.setPassed end.*/

            /*LTDescr.setTime start.*/
            setTime: function (time) {
                var passedTimeRatio = this.passed / this.time;
                this.passed = time * passedTimeRatio;
                this.time = time;
                return this;
            },
            /*LTDescr.setTime end.*/

            /*LTDescr.setSpeed start.*/
            setSpeed: function (speed) {
                this.speed = speed;
                if (this.hasInitiliazed) {
                    this.initSpeed();
                }
                return this;
            },
            /*LTDescr.setSpeed end.*/

            /*LTDescr.setRepeat start.*/
            setRepeat: function (repeat) {
                this.loopCount = repeat;
                if ((repeat > 1 && this.loopType === LeanTweenType.once) || (repeat < 0 && this.loopType === LeanTweenType.once)) {
                    this.loopType = LeanTweenType.clamp;
                }
                if (this.type === TweenAction.CALLBACK || this.type === TweenAction.CALLBACK_COLOR) {
                    this.setOnCompleteOnRepeat(true);
                }
                return this;
            },
            /*LTDescr.setRepeat end.*/

            /*LTDescr.setLoopType start.*/
            setLoopType: function (loopType) {
                this.loopType = loopType;
                return this;
            },
            /*LTDescr.setLoopType end.*/

            /*LTDescr.setUseEstimatedTime start.*/
            setUseEstimatedTime: function (useEstimatedTime) {
                this.useEstimatedTime = useEstimatedTime;
                this.usesNormalDt = false;
                return this;
            },
            /*LTDescr.setUseEstimatedTime end.*/

            /*LTDescr.setIgnoreTimeScale start.*/
            setIgnoreTimeScale: function (useUnScaledTime) {
                this.useEstimatedTime = useUnScaledTime;
                this.usesNormalDt = false;
                return this;
            },
            /*LTDescr.setIgnoreTimeScale end.*/

            /*LTDescr.setUseFrames start.*/
            setUseFrames: function (useFrames) {
                this.useFrames = useFrames;
                this.usesNormalDt = false;
                return this;
            },
            /*LTDescr.setUseFrames end.*/

            /*LTDescr.setUseManualTime start.*/
            setUseManualTime: function (useManualTime) {
                this.useManualTime = useManualTime;
                this.usesNormalDt = false;
                return this;
            },
            /*LTDescr.setUseManualTime end.*/

            /*LTDescr.setLoopCount start.*/
            setLoopCount: function (loopCount) {
                this.loopType = LeanTweenType.clamp;
                this.loopCount = loopCount;
                return this;
            },
            /*LTDescr.setLoopCount end.*/

            /*LTDescr.setLoopOnce start.*/
            setLoopOnce: function () {
                this.loopType = LeanTweenType.once;
                return this;
            },
            /*LTDescr.setLoopOnce end.*/

            /*LTDescr.setLoopClamp start.*/
            setLoopClamp: function () {
                this.loopType = LeanTweenType.clamp;
                if (this.loopCount === 0) {
                    this.loopCount = -1;
                }
                return this;
            },
            /*LTDescr.setLoopClamp end.*/

            /*LTDescr.setLoopClamp$1 start.*/
            setLoopClamp$1: function (loops) {
                this.loopCount = loops;
                return this;
            },
            /*LTDescr.setLoopClamp$1 end.*/

            /*LTDescr.setLoopPingPong start.*/
            setLoopPingPong: function () {
                this.loopType = LeanTweenType.pingPong;
                if (this.loopCount === 0) {
                    this.loopCount = -1;
                }
                return this;
            },
            /*LTDescr.setLoopPingPong end.*/

            /*LTDescr.setLoopPingPong$1 start.*/
            setLoopPingPong$1: function (loops) {
                this.loopType = LeanTweenType.pingPong;
                this.loopCount = loops === -1 ? loops : Bridge.Int.mul(loops, 2);
                return this;
            },
            /*LTDescr.setLoopPingPong$1 end.*/

            /*LTDescr.setOnComplete start.*/
            setOnComplete: function (onComplete) {
                this._optional.onComplete = onComplete;
                this.hasExtraOnCompletes = true;
                return this;
            },
            /*LTDescr.setOnComplete end.*/

            /*LTDescr.setOnComplete$1 start.*/
            setOnComplete$1: function (onComplete) {
                this._optional.onCompleteObject = onComplete;
                this.hasExtraOnCompletes = true;
                return this;
            },
            /*LTDescr.setOnComplete$1 end.*/

            /*LTDescr.setOnComplete$2 start.*/
            setOnComplete$2: function (onComplete, onCompleteParam) {
                this._optional.onCompleteObject = onComplete;
                this.hasExtraOnCompletes = true;
                if (onCompleteParam != null) {
                    this._optional.onCompleteParam = onCompleteParam;
                }
                return this;
            },
            /*LTDescr.setOnComplete$2 end.*/

            /*LTDescr.setOnCompleteParam start.*/
            setOnCompleteParam: function (onCompleteParam) {
                this._optional.onCompleteParam = onCompleteParam;
                this.hasExtraOnCompletes = true;
                return this;
            },
            /*LTDescr.setOnCompleteParam end.*/

            /*LTDescr.setOnUpdate start.*/
            setOnUpdate: function (onUpdate) {
                this._optional.onUpdateFloat = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdate end.*/

            /*LTDescr.setOnUpdate$1 start.*/
            setOnUpdate$1: function (onUpdate) {
                this._optional.onUpdateColor = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdate$1 end.*/

            /*LTDescr.setOnUpdate$5 start.*/
            setOnUpdate$5: function (onUpdate) {
                this._optional.onUpdateColorObject = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdate$5 end.*/

            /*LTDescr.setOnUpdate$4 start.*/
            setOnUpdate$4: function (onUpdate, onUpdateParam) {
                if (onUpdateParam === void 0) { onUpdateParam = null; }
                this._optional.onUpdateFloatObject = onUpdate;
                this.hasUpdateCallback = true;
                if (onUpdateParam != null) {
                    this._optional.onUpdateParam = onUpdateParam;
                }
                return this;
            },
            /*LTDescr.setOnUpdate$4 end.*/

            /*LTDescr.setOnUpdate$6 start.*/
            setOnUpdate$6: function (onUpdate, onUpdateParam) {
                if (onUpdateParam === void 0) { onUpdateParam = null; }
                this._optional.onUpdateVector3Object = onUpdate;
                this.hasUpdateCallback = true;
                if (onUpdateParam != null) {
                    this._optional.onUpdateParam = onUpdateParam;
                }
                return this;
            },
            /*LTDescr.setOnUpdate$6 end.*/

            /*LTDescr.setOnUpdate$2 start.*/
            setOnUpdate$2: function (onUpdate, onUpdateParam) {
                if (onUpdateParam === void 0) { onUpdateParam = null; }
                this._optional.onUpdateVector2 = onUpdate;
                this.hasUpdateCallback = true;
                if (onUpdateParam != null) {
                    this._optional.onUpdateParam = onUpdateParam;
                }
                return this;
            },
            /*LTDescr.setOnUpdate$2 end.*/

            /*LTDescr.setOnUpdate$3 start.*/
            setOnUpdate$3: function (onUpdate, onUpdateParam) {
                if (onUpdateParam === void 0) { onUpdateParam = null; }
                this._optional.onUpdateVector3 = onUpdate;
                this.hasUpdateCallback = true;
                if (onUpdateParam != null) {
                    this._optional.onUpdateParam = onUpdateParam;
                }
                return this;
            },
            /*LTDescr.setOnUpdate$3 end.*/

            /*LTDescr.setOnUpdateRatio start.*/
            setOnUpdateRatio: function (onUpdate) {
                this._optional.onUpdateFloatRatio = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdateRatio end.*/

            /*LTDescr.setOnUpdateObject start.*/
            setOnUpdateObject: function (onUpdate) {
                this._optional.onUpdateFloatObject = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdateObject end.*/

            /*LTDescr.setOnUpdateVector2 start.*/
            setOnUpdateVector2: function (onUpdate) {
                this._optional.onUpdateVector2 = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdateVector2 end.*/

            /*LTDescr.setOnUpdateVector3 start.*/
            setOnUpdateVector3: function (onUpdate) {
                this._optional.onUpdateVector3 = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdateVector3 end.*/

            /*LTDescr.setOnUpdateColor start.*/
            setOnUpdateColor: function (onUpdate) {
                this._optional.onUpdateColor = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdateColor end.*/

            /*LTDescr.setOnUpdateColor$1 start.*/
            setOnUpdateColor$1: function (onUpdate) {
                this._optional.onUpdateColorObject = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdateColor$1 end.*/

            /*LTDescr.setOnUpdateParam start.*/
            setOnUpdateParam: function (onUpdateParam) {
                this._optional.onUpdateParam = onUpdateParam;
                return this;
            },
            /*LTDescr.setOnUpdateParam end.*/

            /*LTDescr.setOrientToPath start.*/
            setOrientToPath: function (doesOrient) {
                if (this.type === TweenAction.MOVE_CURVED || this.type === TweenAction.MOVE_CURVED_LOCAL) {
                    if (this._optional.path == null) {
                        this._optional.path = new LTBezierPath.ctor();
                    }
                    this._optional.path.orientToPath = doesOrient;
                } else {
                    this._optional.spline.orientToPath = doesOrient;
                }
                return this;
            },
            /*LTDescr.setOrientToPath end.*/

            /*LTDescr.setOrientToPath2d start.*/
            setOrientToPath2d: function (doesOrient2d) {
                this.setOrientToPath(doesOrient2d);
                if (this.type === TweenAction.MOVE_CURVED || this.type === TweenAction.MOVE_CURVED_LOCAL) {
                    this._optional.path.orientToPath2d = doesOrient2d;
                } else {
                    this._optional.spline.orientToPath2d = doesOrient2d;
                }
                return this;
            },
            /*LTDescr.setOrientToPath2d end.*/

            /*LTDescr.setRect start.*/
            setRect: function (rect) {
                this._optional.ltRect = rect;
                return this;
            },
            /*LTDescr.setRect end.*/

            /*LTDescr.setRect$1 start.*/
            setRect$1: function (rect) {
                this._optional.ltRect = new LTRect.$ctor4(rect.$clone());
                return this;
            },
            /*LTDescr.setRect$1 end.*/

            /*LTDescr.setRect$2 start.*/
            setRect$2: function (rect) {
                this.rectTransform = rect;
                return this;
            },
            /*LTDescr.setRect$2 end.*/

            /*LTDescr.setPath start.*/
            setPath: function (path) {
                this._optional.path = path;
                return this;
            },
            /*LTDescr.setPath end.*/

            /*LTDescr.setPoint start.*/
            setPoint: function (point) {
                this._optional.point = point.$clone();
                return this;
            },
            /*LTDescr.setPoint end.*/

            /*LTDescr.setDestroyOnComplete start.*/
            setDestroyOnComplete: function (doesDestroy) {
                this.destroyOnComplete = doesDestroy;
                return this;
            },
            /*LTDescr.setDestroyOnComplete end.*/

            /*LTDescr.setAudio start.*/
            setAudio: function (audio) {
                this._optional.onCompleteParam = audio;
                return this;
            },
            /*LTDescr.setAudio end.*/

            /*LTDescr.setOnCompleteOnRepeat start.*/
            setOnCompleteOnRepeat: function (isOn) {
                this.onCompleteOnRepeat = isOn;
                return this;
            },
            /*LTDescr.setOnCompleteOnRepeat end.*/

            /*LTDescr.setOnCompleteOnStart start.*/
            setOnCompleteOnStart: function (isOn) {
                this.onCompleteOnStart = isOn;
                return this;
            },
            /*LTDescr.setOnCompleteOnStart end.*/

            /*LTDescr.setSprites start.*/
            setSprites: function (sprites) {
                this.sprites = sprites;
                return this;
            },
            /*LTDescr.setSprites end.*/

            /*LTDescr.setFrameRate start.*/
            setFrameRate: function (frameRate) {
                this.time = this.sprites.length / frameRate;
                return this;
            },
            /*LTDescr.setFrameRate end.*/

            /*LTDescr.setOnStart start.*/
            setOnStart: function (onStart) {
                this._optional.onStart = onStart;
                return this;
            },
            /*LTDescr.setOnStart end.*/

            /*LTDescr.setDirection start.*/
            setDirection: function (direction) {
                if (this.direction !== -1.0 && this.direction !== 1.0) {
                    UnityEngine.Debug.LogWarning$1("You have passed an incorrect direction of '" + System.Single.format(direction) + "', direction must be -1f or 1f");
                    return this;
                }

                if (this.direction !== direction) {
                    // Debug.Log("reverse path:"+this.path+" spline:"+this._optional.spline+" hasInitiliazed:"+this.hasInitiliazed);
                    if (this.hasInitiliazed) {
                        this.direction = direction;
                    } else {
                        if (this._optional.path != null) {
                            this._optional.path = new LTBezierPath.$ctor1(LTUtility.reverse(this._optional.path.pts));
                        } else if (this._optional.spline != null) {
                            this._optional.spline = new LTSpline.ctor(LTUtility.reverse(this._optional.spline.pts));
                        }
                        // this.passed = this.time - this.passed;
                    }
                }

                return this;
            },
            /*LTDescr.setDirection end.*/

            /*LTDescr.setRecursive start.*/
            setRecursive: function (useRecursion) {
                this.useRecursion = useRecursion;

                return this;
            },
            /*LTDescr.setRecursive end.*/


        },
        overloads: {
            "ToString()": "toString",
            "setScale(float)": "setScale$1",
            "setEase(AnimationCurve)": "setEase$1",
            "setTo(Vector3)": "setTo$1",
            "setFrom(Vector3)": "setFrom$1",
            "setLoopClamp(int)": "setLoopClamp$1",
            "setLoopPingPong(int)": "setLoopPingPong$1",
            "setOnComplete(Action<object>)": "setOnComplete$1",
            "setOnComplete(Action<object>, object)": "setOnComplete$2",
            "setOnUpdate(Action<Color>)": "setOnUpdate$1",
            "setOnUpdate(Action<Color, object>)": "setOnUpdate$5",
            "setOnUpdate(Action<float, object>, object)": "setOnUpdate$4",
            "setOnUpdate(Action<Vector3, object>, object)": "setOnUpdate$6",
            "setOnUpdate(Action<Vector2>, object)": "setOnUpdate$2",
            "setOnUpdate(Action<Vector3>, object)": "setOnUpdate$3",
            "setOnUpdateColor(Action<Color, object>)": "setOnUpdateColor$1",
            "setRect(Rect)": "setRect$1",
            "setRect(RectTransform)": "setRect$2"
        }
    });
    /*LTDescr end.*/

    /*LTDescrOptional start.*/
    Bridge.define("LTDescrOptional", {
        fields: {
            toTrans: null,
            point: null,
            axis: null,
            lastVal: 0,
            origRotation: null,
            path: null,
            spline: null,
            animationCurve: null,
            initFrameCount: 0,
            color: null,
            ltRect: null,
            onUpdateFloat: null,
            onUpdateFloatRatio: null,
            onUpdateFloatObject: null,
            onUpdateVector2: null,
            onUpdateVector3: null,
            onUpdateVector3Object: null,
            onUpdateColor: null,
            onUpdateColorObject: null,
            onComplete: null,
            onCompleteObject: null,
            onCompleteParam: null,
            onUpdateParam: null,
            onStart: null
        },
        ctors: {
            init: function () {
                this.point = new UnityEngine.Vector3();
                this.axis = new UnityEngine.Vector3();
                this.origRotation = new UnityEngine.Quaternion();
                this.color = new UnityEngine.Color();
            }
        },
        methods: {
            /*LTDescrOptional.reset start.*/
            reset: function () {
                this.animationCurve = null;

                this.onUpdateFloat = null;
                this.onUpdateFloatRatio = null;
                this.onUpdateVector2 = null;
                this.onUpdateVector3 = null;
                this.onUpdateFloatObject = null;
                this.onUpdateVector3Object = null;
                this.onUpdateColor = null;
                this.onComplete = null;
                this.onCompleteObject = null;
                this.onCompleteParam = null;
                this.onStart = null;

                this.point = pc.Vec3.ZERO.clone();
                this.initFrameCount = 0;
            },
            /*LTDescrOptional.reset end.*/

            /*LTDescrOptional.callOnUpdate start.*/
            callOnUpdate: function (val, ratioPassed) {
                if (!Bridge.staticEquals(this.onUpdateFloat, null)) {
                    this.onUpdateFloat(val);
                }

                if (!Bridge.staticEquals(this.onUpdateFloatRatio, null)) {
                    this.onUpdateFloatRatio(val, ratioPassed);
                } else if (!Bridge.staticEquals(this.onUpdateFloatObject, null)) {
                    this.onUpdateFloatObject(val, this.onUpdateParam);
                } else if (!Bridge.staticEquals(this.onUpdateVector3Object, null)) {
                    this.onUpdateVector3Object(LTDescr.newVect.$clone(), this.onUpdateParam);
                } else if (!Bridge.staticEquals(this.onUpdateVector3, null)) {
                    this.onUpdateVector3(LTDescr.newVect.$clone());
                } else if (!Bridge.staticEquals(this.onUpdateVector2, null)) {
                    this.onUpdateVector2(new pc.Vec2( LTDescr.newVect.x, LTDescr.newVect.y ));
                }
            },
            /*LTDescrOptional.callOnUpdate end.*/


        }
    });
    /*LTDescrOptional end.*/

    /*LTEvent start.*/
    Bridge.define("LTEvent", {
        fields: {
            id: 0,
            data: null
        },
        ctors: {
            ctor: function (id, data) {
                this.$initialize();
                this.id = id;
                this.data = data;
            }
        }
    });
    /*LTEvent end.*/

    /*LTGUI start.*/
    Bridge.define("LTGUI", {
        statics: {
            fields: {
                RECT_LEVELS: 0,
                RECTS_PER_LEVEL: 0,
                BUTTONS_MAX: 0,
                levels: null,
                levelDepths: null,
                buttons: null,
                buttonLevels: null,
                buttonLastFrame: null,
                r: null,
                color: null,
                isGUIEnabled: false,
                global_counter: 0
            },
            ctors: {
                init: function () {
                    this.color = new UnityEngine.Color();
                    this.RECT_LEVELS = 5;
                    this.RECTS_PER_LEVEL = 10;
                    this.BUTTONS_MAX = 24;
                    this.color = new pc.Color( 1, 1, 1, 1 );
                    this.isGUIEnabled = false;
                    this.global_counter = 0;
                }
            },
            methods: {
                /*LTGUI.init:static start.*/
                init: function () {
                    if (LTGUI.levels == null) {
                        LTGUI.levels = System.Array.init(Bridge.Int.mul(LTGUI.RECT_LEVELS, LTGUI.RECTS_PER_LEVEL), null, LTRect);
                        LTGUI.levelDepths = System.Array.init(LTGUI.RECT_LEVELS, 0, System.Int32);
                    }
                },
                /*LTGUI.init:static end.*/

                /*LTGUI.initRectCheck:static start.*/
                initRectCheck: function () {
                    if (LTGUI.buttons == null) {
                        LTGUI.buttons = System.Array.init(LTGUI.BUTTONS_MAX, function (){
                            return new UnityEngine.Rect();
                        }, UnityEngine.Rect);
                        LTGUI.buttonLevels = System.Array.init(LTGUI.BUTTONS_MAX, 0, System.Int32);
                        LTGUI.buttonLastFrame = System.Array.init(LTGUI.BUTTONS_MAX, 0, System.Int32);
                        for (var i = 0; i < LTGUI.buttonLevels.length; i = (i + 1) | 0) {
                            LTGUI.buttonLevels[i] = -1;
                        }
                    }
                },
                /*LTGUI.initRectCheck:static end.*/

                /*LTGUI.reset:static start.*/
                reset: function () {
                    if (LTGUI.isGUIEnabled) {
                        LTGUI.isGUIEnabled = false;
                        for (var i = 0; i < LTGUI.levels.length; i = (i + 1) | 0) {
                            LTGUI.levels[i] = null;
                        }

                        for (var i1 = 0; i1 < LTGUI.levelDepths.length; i1 = (i1 + 1) | 0) {
                            LTGUI.levelDepths[i1] = 0;
                        }
                    }
                },
                /*LTGUI.reset:static end.*/

                /*LTGUI.update:static start.*/
                update: function (updateLevel) {
                    if (LTGUI.isGUIEnabled) {
                        LTGUI.init();
                        if (LTGUI.levelDepths[updateLevel] > 0) {
                            LTGUI.color = UnityEngine.GUI.color.$clone();
                            var baseI = Bridge.Int.mul(updateLevel, LTGUI.RECTS_PER_LEVEL);
                            var maxLoop = (baseI + LTGUI.levelDepths[updateLevel]) | 0; // RECTS_PER_LEVEL;//;

                            for (var i = baseI; i < maxLoop; i = (i + 1) | 0) {
                                LTGUI.r = LTGUI.levels[i];
                                // Debug.Log("r:"+r+" i:"+i);
                                if (LTGUI.r != null) {
                                    //Debug.Log("label:"+r.labelStr+" textColor:"+r.style.normal.textColor);
                                    if (LTGUI.r.useColor) {
                                        UnityEngine.GUI.color = LTGUI.r.color.$clone();
                                    }
                                    if (LTGUI.r.type === LTGUI.Element_Type.Label) {
                                        if (LTGUI.r.style != null) {
                                            UnityEngine.GUI.skin.label = LTGUI.r.style;
                                        }
                                        if (LTGUI.r.useSimpleScale) {
                                            UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1((LTGUI.r.rect.x + LTGUI.r.margin.x + LTGUI.r.relativeRect.x) * LTGUI.r.relativeRect.width, (LTGUI.r.rect.y + LTGUI.r.margin.y + LTGUI.r.relativeRect.y) * LTGUI.r.relativeRect.height, LTGUI.r.rect.width * LTGUI.r.relativeRect.width, LTGUI.r.rect.height * LTGUI.r.relativeRect.height), LTGUI.r.labelStr);
                                        } else {
                                            UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1(LTGUI.r.rect.x + LTGUI.r.margin.x, LTGUI.r.rect.y + LTGUI.r.margin.y, LTGUI.r.rect.width, LTGUI.r.rect.height), LTGUI.r.labelStr);
                                        }
                                    } else if (LTGUI.r.type === LTGUI.Element_Type.Texture && LTGUI.r.texture != null) {
                                        var size = LTGUI.r.useSimpleScale ? new pc.Vec2( 0.0, LTGUI.r.rect.height * LTGUI.r.relativeRect.height ) : new pc.Vec2( LTGUI.r.rect.width, LTGUI.r.rect.height );
                                        if (LTGUI.r.sizeByHeight) {
                                            size.x = LTGUI.r.texture.width / LTGUI.r.texture.height * size.y;
                                        }
                                        if (LTGUI.r.useSimpleScale) {
                                            UnityEngine.GUI.DrawTexture(new UnityEngine.Rect.$ctor1((LTGUI.r.rect.x + LTGUI.r.margin.x + LTGUI.r.relativeRect.x) * LTGUI.r.relativeRect.width, (LTGUI.r.rect.y + LTGUI.r.margin.y + LTGUI.r.relativeRect.y) * LTGUI.r.relativeRect.height, size.x, size.y), LTGUI.r.texture);
                                        } else {
                                            UnityEngine.GUI.DrawTexture(new UnityEngine.Rect.$ctor1(LTGUI.r.rect.x + LTGUI.r.margin.x, LTGUI.r.rect.y + LTGUI.r.margin.y, size.x, size.y), LTGUI.r.texture);
                                        }
                                    }
                                }
                            }
                            UnityEngine.GUI.color = LTGUI.color.$clone();
                        }
                    }
                },
                /*LTGUI.update:static end.*/

                /*LTGUI.checkOnScreen:static start.*/
                checkOnScreen: function (rect) {
                    var offLeft = rect.x + rect.width < 0.0;
                    var offRight = rect.x > UnityEngine.Screen.width;
                    var offBottom = rect.y > UnityEngine.Screen.height;
                    var offTop = rect.y + rect.height < 0.0;

                    return !(offLeft || offRight || offBottom || offTop);
                },
                /*LTGUI.checkOnScreen:static end.*/

                /*LTGUI.destroy:static start.*/
                destroy: function (id) {
                    var backId = id & 65535;
                    var backCounter = id >> 16;
                    if (id >= 0 && LTGUI.levels[backId] != null && LTGUI.levels[backId].hasInitiliazed && LTGUI.levels[backId].counter === backCounter) {
                        LTGUI.levels[backId] = null;
                    }
                },
                /*LTGUI.destroy:static end.*/

                /*LTGUI.destroyAll:static start.*/
                destroyAll: function (depth) { // clears all gui elements on depth
                    var maxLoop = (Bridge.Int.mul(depth, LTGUI.RECTS_PER_LEVEL) + LTGUI.RECTS_PER_LEVEL) | 0;
                    for (var i = Bridge.Int.mul(depth, LTGUI.RECTS_PER_LEVEL); LTGUI.levels != null && i < maxLoop; i = (i + 1) | 0) {
                        LTGUI.levels[i] = null;
                    }
                },
                /*LTGUI.destroyAll:static end.*/

                /*LTGUI.label$1:static start.*/
                label$1: function (rect, label, depth) {
                    return LTGUI.label(new LTRect.$ctor4(rect.$clone()), label, depth);
                },
                /*LTGUI.label$1:static end.*/

                /*LTGUI.label:static start.*/
                label: function (rect, label, depth) {
                    rect.type = LTGUI.Element_Type.Label;
                    rect.labelStr = label;
                    return LTGUI.element(rect, depth);
                },
                /*LTGUI.label:static end.*/

                /*LTGUI.texture$1:static start.*/
                texture$1: function (rect, texture, depth) {
                    return LTGUI.texture(new LTRect.$ctor4(rect.$clone()), texture, depth);
                },
                /*LTGUI.texture$1:static end.*/

                /*LTGUI.texture:static start.*/
                texture: function (rect, texture, depth) {
                    rect.type = LTGUI.Element_Type.Texture;
                    rect.texture = texture;
                    return LTGUI.element(rect, depth);
                },
                /*LTGUI.texture:static end.*/

                /*LTGUI.element:static start.*/
                element: function (rect, depth) {
                    LTGUI.isGUIEnabled = true;
                    LTGUI.init();
                    var maxLoop = (Bridge.Int.mul(depth, LTGUI.RECTS_PER_LEVEL) + LTGUI.RECTS_PER_LEVEL) | 0;
                    var k = 0;
                    if (rect != null) {
                        LTGUI.destroy(rect.id);
                    }
                    if (rect.type === LTGUI.Element_Type.Label && rect.style != null) {
                        if (rect.style.reportProperty( 'UnityEngine.GUIStyle.normal', null ).reportProperty( 'UnityEngine.GUIStyleState.textColor', null ).a <= 0.0) {
                            UnityEngine.Debug.LogWarning$1("Your GUI normal color has an alpha of zero, and will not be rendered.");
                        }
                    }
                    if (rect.relativeRect.width === Number.POSITIVE_INFINITY) {
                        rect.relativeRect = new UnityEngine.Rect.$ctor1(0.0, 0.0, UnityEngine.Screen.width, UnityEngine.Screen.height);
                    }
                    for (var i = Bridge.Int.mul(depth, LTGUI.RECTS_PER_LEVEL); i < maxLoop; i = (i + 1) | 0) {
                        LTGUI.r = LTGUI.levels[i];
                        if (LTGUI.r == null) {
                            LTGUI.r = rect;
                            LTGUI.r.rotateEnabled = true;
                            LTGUI.r.alphaEnabled = true;
                            LTGUI.r.setId(i, LTGUI.global_counter);
                            LTGUI.levels[i] = LTGUI.r;
                            // Debug.Log("k:"+k+ " maxDepth:"+levelDepths[depth]);
                            if (k >= LTGUI.levelDepths[depth]) {
                                LTGUI.levelDepths[depth] = (k + 1) | 0;
                            }
                            LTGUI.global_counter = (LTGUI.global_counter + 1) | 0;
                            return LTGUI.r;
                        }
                        k = (k + 1) | 0;
                    }

                    UnityEngine.Debug.LogError$2("You ran out of GUI Element spaces");

                    return null;
                },
                /*LTGUI.element:static end.*/

                /*LTGUI.hasNoOverlap:static start.*/
                hasNoOverlap: function (rect, depth) {
                    LTGUI.initRectCheck();
                    var hasNoOverlap = true;
                    var wasAddedToList = false;
                    for (var i = 0; i < LTGUI.buttonLevels.length; i = (i + 1) | 0) {
                        // Debug.Log("buttonLastFrame["+i+"]:"+buttonLastFrame[i]);
                        //Debug.Log("buttonLevels["+i+"]:"+buttonLevels[i]);
                        if (LTGUI.buttonLevels[i] >= 0) {
                            //Debug.Log("buttonLastFrame["+i+"]:"+buttonLastFrame[i]+" Time.frameCount:"+Time.frameCount);
                            if (((LTGUI.buttonLastFrame[i] + 1) | 0) < UnityEngine.Time.frameCount) { // It has to have been visible within the current, or
                                LTGUI.buttonLevels[i] = -1;
                                // Debug.Log("resetting i:"+i);
                            } else {
                                //if(buttonLevels[i]>=0)
                                //   Debug.Log("buttonLevels["+i+"]:"+buttonLevels[i]);
                                if (LTGUI.buttonLevels[i] > depth) {
                                    /* if(firstTouch().x > 0){
                                       Debug.Log("buttons["+i+"]:"+buttons[i] + " firstTouch:");
                                       Debug.Log(firstTouch());
                                       Debug.Log(buttonLevels[i]);
                                    }*/
                                    if (LTGUI.pressedWithinRect(LTGUI.buttons[i])) {
                                        hasNoOverlap = false; // there is an overlapping button that is higher
                                    }
                                }
                            }
                        }

                        if (wasAddedToList === false && LTGUI.buttonLevels[i] < 0) {
                            wasAddedToList = true;
                            LTGUI.buttonLevels[i] = depth;
                            LTGUI.buttons[i] = rect.$clone();
                            LTGUI.buttonLastFrame[i] = UnityEngine.Time.frameCount;
                        }
                    }

                    return hasNoOverlap;
                },
                /*LTGUI.hasNoOverlap:static end.*/

                /*LTGUI.pressedWithinRect:static start.*/
                pressedWithinRect: function (rect) {
                    var vec2 = LTGUI.firstTouch();
                    if (vec2.x < 0.0) {
                        return false;
                    }
                    var vecY = UnityEngine.Screen.height - vec2.y;
                    return (vec2.x > rect.x && vec2.x < rect.x + rect.width && vecY > rect.y && vecY < rect.y + rect.height);
                },
                /*LTGUI.pressedWithinRect:static end.*/

                /*LTGUI.checkWithinRect:static start.*/
                checkWithinRect: function (vec2, rect) {
                    vec2.y = UnityEngine.Screen.height - vec2.y;
                    return (vec2.x > rect.x && vec2.x < rect.x + rect.width && vec2.y > rect.y && vec2.y < rect.y + rect.height);
                },
                /*LTGUI.checkWithinRect:static end.*/

                /*LTGUI.firstTouch:static start.*/
                firstTouch: function () {
                    var $t;
                    if (UnityEngine.Input.touchCount > 0) {
                        return ($t = UnityEngine.Input.touches)[0].position.$clone();
                    } else if (UnityEngine.Input.GetMouseButton(0)) {
                        return UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone());
                    }

                    return new pc.Vec2( (-window.Infinity), (-window.Infinity) );
                },
                /*LTGUI.firstTouch:static end.*/


            }
        }
    });
    /*LTGUI end.*/

    /*LTGUI+Element_Type start.*/
    Bridge.define("LTGUI.Element_Type", {
        $kind: 1006,
        statics: {
            fields: {
                Texture: 0,
                Label: 1
            }
        }
    });
    /*LTGUI+Element_Type end.*/

    /*LTRect start.*/
    Bridge.define("LTRect", {
        statics: {
            fields: {
                colorTouched: false
            }
        },
        fields: {
            _rect: null,
            alpha: 0,
            rotation: 0,
            pivot: null,
            margin: null,
            relativeRect: null,
            rotateEnabled: false,
            rotateFinished: false,
            alphaEnabled: false,
            labelStr: null,
            type: 0,
            style: null,
            useColor: false,
            color: null,
            fontScaleToFit: false,
            useSimpleScale: false,
            sizeByHeight: false,
            texture: null,
            _id: 0,
            counter: 0
        },
        props: {
            hasInitiliazed: {
                get: function () {
                    return this._id !== -1;
                }
            },
            id: {
                get: function () {
                    var toId = this._id | this.counter << 16;

                    /* uint backId = toId & 0xFFFF;
                    uint backCounter = toId >> 16;
                    if(_id!=backId || backCounter!=counter){
                       Debug.LogError("BAD CONVERSION toId:"+_id);
                    }*/

                    return toId;
                }
            },
            x: {
                get: function () {
                    return this._rect.x;
                },
                set: function (value) {
                    this._rect.x = value;
                }
            },
            y: {
                get: function () {
                    return this._rect.y;
                },
                set: function (value) {
                    this._rect.y = value;
                }
            },
            width: {
                get: function () {
                    return this._rect.width;
                },
                set: function (value) {
                    this._rect.width = value;
                }
            },
            height: {
                get: function () {
                    return this._rect.height;
                },
                set: function (value) {
                    this._rect.height = value;
                }
            },
            rect: {
                get: function () {
                    if (LTRect.colorTouched) {
                        LTRect.colorTouched = false;
                        UnityEngine.GUI.color = new pc.Color( UnityEngine.GUI.color.r, UnityEngine.GUI.color.g, UnityEngine.GUI.color.b, 1.0 );
                    }
                    if (this.rotateEnabled) {
                        if (this.rotateFinished) {
                            this.rotateFinished = false;
                            this.rotateEnabled = false;
                            //this.rotation = 0.0f;
                            this.pivot = pc.Vec2.ZERO.clone();
                        } else {
                            pc.stubProxy.reportMethod( 'UnityEngine.GUIUtility.RotateAroundPivot', null );
                        }
                    }
                    if (this.alphaEnabled) {
                        UnityEngine.GUI.color = new pc.Color( UnityEngine.GUI.color.r, UnityEngine.GUI.color.g, UnityEngine.GUI.color.b, this.alpha );
                        LTRect.colorTouched = true;
                    }
                    if (this.fontScaleToFit) {
                        if (this.useSimpleScale) {
                            this.style.fontSize = Bridge.Int.clip32(this._rect.height * this.relativeRect.height);
                        } else {
                            this.style.fontSize = Bridge.Int.clip32(this._rect.height);
                        }
                    }
                    return this._rect.$clone();
                },
                set: function (value) {
                    this._rect = value.$clone();
                }
            }
        },
        ctors: {
            init: function () {
                this._rect = new UnityEngine.Rect();
                this.pivot = new UnityEngine.Vector2();
                this.margin = new UnityEngine.Vector2();
                this.relativeRect = new UnityEngine.Rect();
                this.color = new UnityEngine.Color();
                this.alpha = 1.0;
                this.relativeRect = new UnityEngine.Rect.$ctor1(0.0, 0.0, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
                this.useColor = false;
                this.color = new pc.Color( 1, 1, 1, 1 );
                this._id = -1;
            },
            ctor: function () {
                this.$initialize();
                this.reset();
                this.rotateEnabled = (this.alphaEnabled = true);
                this._rect = new UnityEngine.Rect.$ctor1(0.0, 0.0, 1.0, 1.0);
            },
            $ctor4: function (rect) {
                this.$initialize();
                this._rect = rect.$clone();
                this.reset();
            },
            $ctor1: function (x, y, width, height) {
                this.$initialize();
                this._rect = new UnityEngine.Rect.$ctor1(x, y, width, height);
                this.alpha = 1.0;
                this.rotation = 0.0;
                this.rotateEnabled = (this.alphaEnabled = false);
            },
            $ctor2: function (x, y, width, height, alpha) {
                this.$initialize();
                this._rect = new UnityEngine.Rect.$ctor1(x, y, width, height);
                this.alpha = alpha;
                this.rotation = 0.0;
                this.rotateEnabled = (this.alphaEnabled = false);
            },
            $ctor3: function (x, y, width, height, alpha, rotation) {
                this.$initialize();
                this._rect = new UnityEngine.Rect.$ctor1(x, y, width, height);
                this.alpha = alpha;
                this.rotation = rotation;
                this.rotateEnabled = (this.alphaEnabled = false);
                if (rotation !== 0.0) {
                    this.rotateEnabled = true;
                    this.resetForRotation();
                }
            }
        },
        methods: {
            /*LTRect.setId start.*/
            setId: function (id, counter) {
                this._id = id;
                this.counter = counter;
            },
            /*LTRect.setId end.*/

            /*LTRect.reset start.*/
            reset: function () {
                this.alpha = 1.0;
                this.rotation = 0.0;
                this.rotateEnabled = (this.alphaEnabled = false);
                this.margin = pc.Vec2.ZERO.clone();
                this.sizeByHeight = false;
                this.useColor = false;
            },
            /*LTRect.reset end.*/

            /*LTRect.resetForRotation start.*/
            resetForRotation: function () {
                var scale = new pc.Vec3( UnityEngine.GUI.matrix.getitem$1(0, 0), UnityEngine.GUI.matrix.getitem$1(1, 1), UnityEngine.GUI.matrix.getitem$1(2, 2) );
                if (pc.Vec2.equals( this.pivot, pc.Vec2.ZERO.clone() )) {
                    this.pivot = new pc.Vec2( (this._rect.x + ((this._rect.width) * 0.5)) * scale.x + UnityEngine.GUI.matrix.getitem$1(0, 3), (this._rect.y + ((this._rect.height) * 0.5)) * scale.y + UnityEngine.GUI.matrix.getitem$1(1, 3) );
                }
            },
            /*LTRect.resetForRotation end.*/

            /*LTRect.setStyle start.*/
            setStyle: function (style) {
                this.style = style;
                return this;
            },
            /*LTRect.setStyle end.*/

            /*LTRect.setFontScaleToFit start.*/
            setFontScaleToFit: function (fontScaleToFit) {
                this.fontScaleToFit = fontScaleToFit;
                return this;
            },
            /*LTRect.setFontScaleToFit end.*/

            /*LTRect.setColor start.*/
            setColor: function (color) {
                this.color = color.$clone();
                this.useColor = true;
                return this;
            },
            /*LTRect.setColor end.*/

            /*LTRect.setAlpha start.*/
            setAlpha: function (alpha) {
                this.alpha = alpha;
                return this;
            },
            /*LTRect.setAlpha end.*/

            /*LTRect.setLabel start.*/
            setLabel: function (str) {
                this.labelStr = str;
                return this;
            },
            /*LTRect.setLabel end.*/

            /*LTRect.setUseSimpleScale$1 start.*/
            setUseSimpleScale$1: function (useSimpleScale, relativeRect) {
                this.useSimpleScale = useSimpleScale;
                this.relativeRect = relativeRect.$clone();
                return this;
            },
            /*LTRect.setUseSimpleScale$1 end.*/

            /*LTRect.setUseSimpleScale start.*/
            setUseSimpleScale: function (useSimpleScale) {
                this.useSimpleScale = useSimpleScale;
                this.relativeRect = new UnityEngine.Rect.$ctor1(0.0, 0.0, UnityEngine.Screen.width, UnityEngine.Screen.height);
                return this;
            },
            /*LTRect.setUseSimpleScale end.*/

            /*LTRect.setSizeByHeight start.*/
            setSizeByHeight: function (sizeByHeight) {
                this.sizeByHeight = sizeByHeight;
                return this;
            },
            /*LTRect.setSizeByHeight end.*/

            /*LTRect.toString start.*/
            toString: function () {
                return "x:" + System.Single.format(this._rect.x) + " y:" + System.Single.format(this._rect.y) + " width:" + System.Single.format(this._rect.width) + " height:" + System.Single.format(this._rect.height);
            },
            /*LTRect.toString end.*/


        },
        overloads: {
            "setUseSimpleScale(bool, Rect)": "setUseSimpleScale$1",
            "ToString()": "toString"
        }
    });
    /*LTRect end.*/

    /*LTSeq start.*/
    Bridge.define("LTSeq", {
        fields: {
            previous: null,
            current: null,
            tween: null,
            totalDelay: 0,
            timeScale: 0,
            debugIter: 0,
            counter: 0,
            toggle: false,
            _id: 0
        },
        props: {
            id: {
                get: function () {
                    var toId = (this._id | ((this.counter << 16) >>> 0)) >>> 0;

                    /* uint backId = toId & 0xFFFF;
                    			uint backCounter = toId >> 16;
                    			if(_id!=backId || backCounter!=counter){
                    				Debug.LogError("BAD CONVERSION toId:"+_id);
                    			}*/

                    return (toId | 0);
                }
            }
        },
        ctors: {
            init: function () {
                this.toggle = false;
            }
        },
        methods: {
            /*LTSeq.reset start.*/
            reset: function () {
                this.previous = null;
                this.tween = null;
                this.totalDelay = 0.0;
            },
            /*LTSeq.reset end.*/

            /*LTSeq.init start.*/
            init: function (id, global_counter) {
                this.reset();
                this._id = id;

                this.counter = global_counter;

                this.current = this;
            },
            /*LTSeq.init end.*/

            /*LTSeq.addOn start.*/
            addOn: function () {
                this.current.toggle = true;
                var lastCurrent = this.current;
                this.current = LeanTween.sequence(true);
                // Debug.Log("this.current:" + this.current.id + " lastCurrent:" + lastCurrent.id);
                this.current.previous = lastCurrent;
                lastCurrent.toggle = false;
                this.current.totalDelay = lastCurrent.totalDelay;
                this.current.debugIter = (lastCurrent.debugIter + 1) | 0;
                return this.current;
            },
            /*LTSeq.addOn end.*/

            /*LTSeq.addPreviousDelays start.*/
            addPreviousDelays: function () {
                //		Debug.Log("delay:"+delay+" count:"+this.current.count+" this.current.totalDelay:"+this.current.totalDelay);

                var prev = this.current.previous;

                if (prev != null && prev.tween != null) {
                    return this.current.totalDelay + prev.tween.time;
                }
                return this.current.totalDelay;
            },
            /*LTSeq.addPreviousDelays end.*/

            /*LTSeq.append$3 start.*/
            append$3: function (delay) {
                this.current.totalDelay += delay;

                return this.current;
            },
            /*LTSeq.append$3 end.*/

            /*LTSeq.append$1 start.*/
            append$1: function (callback) {
                var newTween = LeanTween.delayedCall(0.0, callback);
                //		Debug.Log("newTween:" + newTween);
                return this.append(newTween);
            },
            /*LTSeq.append$1 end.*/

            /*LTSeq.append$2 start.*/
            append$2: function (callback, obj) {
                this.append(LeanTween.delayedCall$1(0.0, callback).setOnCompleteParam(obj));

                return this.addOn();
            },
            /*LTSeq.append$2 end.*/

            /*LTSeq.append$4 start.*/
            append$4: function (gameObject, callback) {
                this.append(LeanTween.delayedCall$2(gameObject, 0.0, callback));

                return this.addOn();
            },
            /*LTSeq.append$4 end.*/

            /*LTSeq.append$5 start.*/
            append$5: function (gameObject, callback, obj) {
                this.append(LeanTween.delayedCall$3(gameObject, 0.0, callback).setOnCompleteParam(obj));

                return this.addOn();
            },
            /*LTSeq.append$5 end.*/

            /*LTSeq.append start.*/
            append: function (tween) {
                this.current.tween = tween;

                //		Debug.Log("tween:" + tween + " delay:" + this.current.totalDelay);

                this.current.totalDelay = this.addPreviousDelays();

                tween.setDelay(this.current.totalDelay);

                return this.addOn();
            },
            /*LTSeq.append end.*/

            /*LTSeq.insert start.*/
            insert: function (tween) {
                this.current.tween = tween;

                tween.setDelay(this.addPreviousDelays());

                return this.addOn();
            },
            /*LTSeq.insert end.*/

            /*LTSeq.setScale start.*/
            setScale: function (timeScale) {
                //		Debug.Log("this.current:" + this.current.previous.debugIter+" tween:"+this.current.previous.tween);
                this.setScaleRecursive(this.current, timeScale, 500);

                return this.addOn();
            },
            /*LTSeq.setScale end.*/

            /*LTSeq.setScaleRecursive start.*/
            setScaleRecursive: function (seq, timeScale, count) {
                if (count > 0) {
                    this.timeScale = timeScale;

                    //			Debug.Log("seq.count:" + count + " seq.tween:" + seq.tween);
                    seq.totalDelay *= timeScale;
                    if (seq.tween != null) {
                        //			Debug.Log("seq.tween.time * timeScale:" + seq.tween.time * timeScale + " seq.totalDelay:"+seq.totalDelay +" time:"+seq.tween.time+" seq.tween.delay:"+seq.tween.delay);
                        if (seq.tween.time !== 0.0) {
                            seq.tween.setTime(seq.tween.time * timeScale);
                        }
                        seq.tween.setDelay(seq.tween.delay * timeScale);
                    }

                    if (seq.previous != null) {
                        this.setScaleRecursive(seq.previous, timeScale, ((count - 1) | 0));
                    }
                }
            },
            /*LTSeq.setScaleRecursive end.*/

            /*LTSeq.reverse start.*/
            reverse: function () {

                return this.addOn();
            },
            /*LTSeq.reverse end.*/


        },
        overloads: {
            "append(float)": "append$3",
            "append(System.Action)": "append$1",
            "append(System.Action<object>, object)": "append$2",
            "append(GameObject, System.Action)": "append$4",
            "append(GameObject, System.Action<object>, object)": "append$5"
        }
    });
    /*LTSeq end.*/

    /*LTSpline start.*/
    Bridge.define("LTSpline", {
        statics: {
            fields: {
                DISTANCE_COUNT: 0,
                SUBLINE_COUNT: 0
            },
            ctors: {
                init: function () {
                    this.DISTANCE_COUNT = 3;
                    this.SUBLINE_COUNT = 20;
                }
            },
            methods: {
                /*LTSpline.drawGizmo:static start.*/
                drawGizmo: function (arr, color) {
                    if (arr.length >= 4) {
                        var vec3s = System.Array.init(arr.length, function (){
                            return new UnityEngine.Vector3();
                        }, UnityEngine.Vector3);
                        for (var i = 0; i < arr.length; i = (i + 1) | 0) {
                            vec3s[i] = arr[i].position.$clone();
                        }
                        var spline = new LTSpline.ctor(vec3s);
                        var prevPt = spline.ptsAdj[0].$clone();

                        var colorBefore = pc.generateStubProxy( 'UnityEngine.Gizmos', true ).reportProperty( 'UnityEngine.Gizmos.color', null );
                        pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = color.$clone();
                        for (var i1 = 0; i1 < spline.ptsAdjLength; i1 = (i1 + 1) | 0) {
                            var currPt2 = spline.ptsAdj[i1].$clone();
                            // Debug.Log("currPt2:"+currPt2);

                            pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawLine', null );
                            prevPt = currPt2.$clone();
                        }
                        pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = colorBefore.$clone();
                    }
                },
                /*LTSpline.drawGizmo:static end.*/

                /*LTSpline.drawLine:static start.*/
                drawLine: function (arr, width, color) {
                    if (arr.length >= 4) {

                    }
                },
                /*LTSpline.drawLine:static end.*/


            }
        },
        fields: {
            distance: 0,
            constantSpeed: false,
            pts: null,
            ptsAdj: null,
            ptsAdjLength: 0,
            orientToPath: false,
            orientToPath2d: false,
            numSections: 0,
            currPt: 0
        },
        ctors: {
            init: function () {
                this.distance = 0.0;
                this.constantSpeed = true;
            },
            ctor: function (pts) {
                this.$initialize();
                this.init(pts, true);
            },
            $ctor1: function (pts, constantSpeed) {
                this.$initialize();
                this.constantSpeed = constantSpeed;
                this.init(pts, constantSpeed);
            }
        },
        methods: {
            /*LTSpline.init start.*/
            init: function (pts, constantSpeed) {
                if (pts.length < 4) {
                    LeanTween.logError("LeanTween - When passing values for a spline path, you must pass four or more values!");
                    return;
                }

                this.pts = System.Array.init(pts.length, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                System.Array.copy(pts, 0, this.pts, 0, pts.length);

                this.numSections = (pts.length - 3) | 0;

                var minSegment = Number.POSITIVE_INFINITY;
                var earlierPoint = this.pts[1].$clone();
                var totalDistance = 0.0;
                for (var i = 1; i < ((this.pts.length - 1) | 0); i = (i + 1) | 0) {
                    // float pointDistance = (this.pts[i]-earlierPoint).sqrMagnitude;
                    var pointDistance = pc.Vec3.distance( this.pts[i], earlierPoint );
                    //Debug.Log("pointDist:"+pointDistance);
                    if (pointDistance < minSegment) {
                        minSegment = pointDistance;
                    }

                    totalDistance += pointDistance;
                }

                if (constantSpeed) {
                    minSegment = totalDistance / (Bridge.Int.mul(this.numSections, LTSpline.SUBLINE_COUNT));
                    //Debug.Log("minSegment:"+minSegment+" numSections:"+numSections);

                    var minPrecision = minSegment / LTSpline.SUBLINE_COUNT; // number of subdivisions in each segment
                    var precision = Bridge.Int.mul(Math.ceil(totalDistance / minPrecision), LTSpline.DISTANCE_COUNT);
                    // Debug.Log("precision:"+precision);
                    if (precision <= 1) {
                        precision = 2;
                    }

                    this.ptsAdj = System.Array.init(precision, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    earlierPoint = this.interp(0.0);
                    var num = 1;
                    this.ptsAdj[0] = earlierPoint.$clone();
                    this.distance = 0.0;
                    for (var i1 = 0; i1 < ((precision + 1) | 0); i1 = (i1 + 1) | 0) {
                        var fract = i1 / precision;
                        // Debug.Log("fract:"+fract);
                        var point = this.interp(fract);
                        var dist = pc.Vec3.distance( point, earlierPoint );

                        // float dist = (point-earlierPoint).sqrMagnitude;
                        if (dist >= minPrecision || fract >= 1.0) {
                            this.ptsAdj[num] = point.$clone();
                            this.distance += dist; // only add it to the total distance once we know we are adding it as an adjusted point

                            earlierPoint = point.$clone();
                            // Debug.Log("fract:"+fract+" point:"+point);
                            num = (num + 1) | 0;
                        }
                    }
                    // make sure there is a point at the very end
                    /* num++;
                    Vector3 endPoint = interp( 1f );
                    ptsAdj[num] = endPoint;*/
                    // Debug.Log("fract 1f endPoint:"+endPoint);

                    this.ptsAdjLength = num;
                }
                // Debug.Log("map 1f:"+map(1f)+" end:"+ptsAdj[ ptsAdjLength-1 ]);

                // Debug.Log("ptsAdjLength:"+ptsAdjLength+" minPrecision:"+minPrecision+" precision:"+precision);
            },
            /*LTSpline.init end.*/

            /*LTSpline.map start.*/
            map: function (u) {
                if (u >= 1.0) {
                    return this.pts[((this.pts.length - 2) | 0)].$clone();
                }
                var t = u * (((this.ptsAdjLength - 1) | 0));
                var first = Math.floor(t);
                var next = Math.ceil(t);

                if (first < 0) {
                    first = 0;
                }

                var val = this.ptsAdj[first].$clone();


                var nextVal = this.ptsAdj[next].$clone();
                var diff = t - first;

                // Debug.Log("u:"+u+" val:"+val +" nextVal:"+nextVal+" diff:"+diff+" first:"+first+" next:"+next);

                val = val.$clone().add( (nextVal.$clone().sub( val )).clone().scale( diff ) );

                return val.$clone();
            },
            /*LTSpline.map end.*/

            /*LTSpline.interp start.*/
            interp: function (t) {
                this.currPt = UnityEngine.Mathf.Min(Math.floor(t * this.numSections), ((this.numSections - 1) | 0));
                var u = t * this.numSections - this.currPt;

                //Debug.Log("currPt:"+currPt+" numSections:"+numSections+" pts.Length :"+pts.Length );
                var a = this.pts[this.currPt].$clone();
                var b = this.pts[((this.currPt + 1) | 0)].$clone();
                var c = this.pts[((this.currPt + 2) | 0)].$clone();
                var d = this.pts[((this.currPt + 3) | 0)].$clone();

                var val = (((a.$clone().scale( -1 ).add( b.clone().scale( 3.0 ) ).sub( c.clone().scale( 3.0 ) ).add( d )).clone().scale( (u * u * u) ).add( (a.clone().scale( 2.0 ).sub( b.clone().scale( 5.0 ) ).add( c.clone().scale( 4.0 ) ).sub( d )).clone().scale( (u * u) ) ).add( (a.$clone().scale( -1 ).add( c )).clone().scale( u ) ).add( b.clone().scale( 2.0 ) )).clone().scale( 0.5 ));
                // Debug.Log("currPt:"+currPt+" t:"+t+" val.x"+val.x+" y:"+val.y+" z:"+val.z);

                return val.$clone();
            },
            /*LTSpline.interp end.*/

            /*LTSpline.ratioAtPoint start.*/
            ratioAtPoint: function (pt) {
                var closestDist = 3.40282347E+38;
                var closestI = 0;
                for (var i = 0; i < this.ptsAdjLength; i = (i + 1) | 0) {
                    var dist = pc.Vec3.distance( pt, this.ptsAdj[i] );
                    // Debug.Log("i:"+i+" dist:"+dist);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closestI = i;
                    }
                }
                // Debug.Log("closestI:"+closestI+" ptsAdjLength:"+ptsAdjLength);
                return closestI / (((this.ptsAdjLength - 1) | 0));
            },
            /*LTSpline.ratioAtPoint end.*/

            /*LTSpline.point start.*/
            point: function (ratio) {
                var t = ratio > 1.0 ? 1.0 : ratio;
                return this.constantSpeed ? this.map(t) : this.interp(t);
            },
            /*LTSpline.point end.*/

            /*LTSpline.place2d start.*/
            place2d: function (transform, ratio) {
                transform.position = this.point(ratio);
                ratio += 0.001;
                if (ratio <= 1.0) {
                    var v3Dir = this.point(ratio).sub( transform.position );
                    var angle = Math.atan2(v3Dir.y, v3Dir.x) * UnityEngine.Mathf.Rad2Deg;
                    transform.eulerAngles = new pc.Vec3( 0, 0, angle );
                }
            },
            /*LTSpline.place2d end.*/

            /*LTSpline.placeLocal2d start.*/
            placeLocal2d: function (transform, ratio) {
                var trans = transform.parent;
                if (UnityEngine.Component.op_Equality(trans, null)) { // this has no parent, just do a regular transform
                    this.place2d(transform, ratio);
                    return;
                }
                transform.localPosition = this.point(ratio);
                ratio += 0.001;
                if (ratio <= 1.0) {
                    var ptAhead = this.point(ratio); //trans.TransformPoint(  );
                    var v3Dir = ptAhead.$clone().sub( transform.localPosition );
                    var angle = Math.atan2(v3Dir.y, v3Dir.x) * UnityEngine.Mathf.Rad2Deg;
                    transform.localEulerAngles = new pc.Vec3( 0, 0, angle );
                }
            },
            /*LTSpline.placeLocal2d end.*/

            /*LTSpline.place start.*/
            place: function (transform, ratio) {
                this.place$1(transform, ratio, pc.Vec3.UP.clone());
            },
            /*LTSpline.place end.*/

            /*LTSpline.place$1 start.*/
            place$1: function (transform, ratio, worldUp) {
                // ratio = Mathf.Repeat(ratio, 1.0f); // make sure ratio is always between 0-1
                transform.position = this.point(ratio);
                ratio += 0.001;
                if (ratio <= 1.0) {
                    transform.LookAt$3(this.point(ratio), worldUp);
                }

            },
            /*LTSpline.place$1 end.*/

            /*LTSpline.placeLocal start.*/
            placeLocal: function (transform, ratio) {
                this.placeLocal$1(transform, ratio, pc.Vec3.UP.clone());
            },
            /*LTSpline.placeLocal end.*/

            /*LTSpline.placeLocal$1 start.*/
            placeLocal$1: function (transform, ratio, worldUp) {
                transform.localPosition = this.point(ratio);
                ratio += 0.001;
                if (ratio <= 1.0) {
                    transform.LookAt$3(transform.parent.TransformPoint$1(this.point(ratio)), worldUp);
                }
            },
            /*LTSpline.placeLocal$1 end.*/

            /*LTSpline.gizmoDraw start.*/
            gizmoDraw: function (t) {
                if (t === void 0) { t = -1.0; }
                if (this.ptsAdj == null || this.ptsAdj.length <= 0) {
                    return;
                }

                var prevPt = this.ptsAdj[0].$clone();

                for (var i = 0; i < this.ptsAdjLength; i = (i + 1) | 0) {
                    var currPt2 = this.ptsAdj[i].$clone();
                    // Debug.Log("currPt2:"+currPt2);
                    //Gizmos.color = new Color(UnityEngine.Random.Range(0f,1f),UnityEngine.Random.Range(0f,1f),UnityEngine.Random.Range(0f,1f),1);
                    pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawLine', null );
                    prevPt = currPt2.$clone();
                }
            },
            /*LTSpline.gizmoDraw end.*/

            /*LTSpline.drawGizmo start.*/
            drawGizmo: function (color) {
                if (this.ptsAdjLength >= 4) {

                    var prevPt = this.ptsAdj[0].$clone();

                    var colorBefore = pc.generateStubProxy( 'UnityEngine.Gizmos', true ).reportProperty( 'UnityEngine.Gizmos.color', null );
                    pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = color.$clone();
                    for (var i = 0; i < this.ptsAdjLength; i = (i + 1) | 0) {
                        var currPt2 = this.ptsAdj[i].$clone();
                        // Debug.Log("currPt2:"+currPt2);

                        pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawLine', null );
                        prevPt = currPt2.$clone();
                    }
                    pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = colorBefore.$clone();
                }
            },
            /*LTSpline.drawGizmo end.*/

            /*LTSpline.generateVectors start.*/
            generateVectors: function () {
                if (this.pts.length >= 4) {
                    var meshPoints = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor();
                    var prevPt = this.pts[0].$clone();
                    meshPoints.add(prevPt.$clone());

                    var split = 1.0 / (this.pts.length * 10.0);

                    var iter = 0.0;
                    while (iter < 1.0) {
                        var at = iter / 1.0;
                        var currPt2 = this.interp(at);
                        //                Debug.Log("currPt2:"+currPt2);

                        //                GL.Vertex(prevPt);
                        //                GL.Vertex(currPt2);
                        meshPoints.add(currPt2.$clone());

                        //                prevPt = currPt2;

                        iter += split;
                    }

                    meshPoints.ToArray();
                }
                return null;
            },
            /*LTSpline.generateVectors end.*/


        },
        overloads: {
            "place(Transform, float, Vector3)": "place$1",
            "placeLocal(Transform, float, Vector3)": "placeLocal$1"
        }
    });
    /*LTSpline end.*/

    /*LTUtility start.*/
    Bridge.define("LTUtility", {
        statics: {
            methods: {
                /*LTUtility.reverse:static start.*/
                reverse: function (arr) {
                    var length = arr.length;
                    var left = 0;
                    var right = (length - 1) | 0;

                    for (; left < right; left = (left + 1) | 0, right = (right - 1) | 0) {
                        var temporary = arr[left].$clone();
                        arr[left] = arr[right].$clone();
                        arr[right] = temporary.$clone();
                    }
                    return arr;
                },
                /*LTUtility.reverse:static end.*/


            }
        }
    });
    /*LTUtility end.*/

    /*NodeComponentPool$1 start.*/
    Bridge.define("NodeComponentPool$1", function (T) { return {
        fields: {
            pool: null,
            usedArray: null,
            mItemPrefab: null,
            ItemParent: null,
            nMaxCapicity: 0
        },
        ctors: {
            init: function () {
                this.pool = new (System.Collections.Generic.Stack$1(T)).ctor();
                this.usedArray = new (System.Collections.Generic.List$1(T)).ctor();
                this.nMaxCapicity = -1;
            }
        },
        methods: {
            /*NodeComponentPool$1.Init start.*/
            Init: function (mItemPrefab, nInitCount) {
                if (nInitCount === void 0) { nInitCount = 0; }
                this.mItemPrefab = mItemPrefab;
                this.mItemPrefab.SetActive(false);
                this.ItemParent = this.mItemPrefab.transform.parent;
                this.preLoadObj(nInitCount);
            },
            /*NodeComponentPool$1.Init end.*/

            /*NodeComponentPool$1.InnerCreateItem start.*/
            InnerCreateItem: function () {
                var go = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.mItemPrefab);
                var mItem = Bridge.rValue(go.GetComponent(T));

                PrintTool.Assert(Bridge.rValue(mItem) != null, "mItem is Null");
                PrintTool.Assert(UnityEngine.GameObject.op_Inequality(Bridge.rValue(mItem).gameObject, null), "mItem.node is Null");

Bridge.rValue(                mItem).transform.SetParent(this.ItemParent, false);
Bridge.rValue(                mItem).gameObject.SetActive(false);
                return Bridge.rValue(mItem);
            },
            /*NodeComponentPool$1.InnerCreateItem end.*/

            /*NodeComponentPool$1.recycleObj start.*/
            recycleObj: function (obj) {
                var nIndex = this.usedArray.indexOf(Bridge.rValue(obj));
                PrintTool.Assert(nIndex >= 0, "recyleObj 000 Error: ", Bridge.box(nIndex, System.Int32));
                this.usedArray.removeAt(nIndex);
                nIndex = this.usedArray.indexOf(Bridge.rValue(obj));
                PrintTool.Assert(nIndex === -1, "recyleObj 111 Error");
Bridge.rValue(                obj).gameObject.SetActive(false);
Bridge.rValue(                obj).transform.SetParent(this.ItemParent, false);
                this.pool.Push(Bridge.rValue(obj));
            },
            /*NodeComponentPool$1.recycleObj end.*/

            /*NodeComponentPool$1.popObj start.*/
            popObj: function () {
                var mItem = null;
                if (this.pool.Count > 0) {
                    mItem = Bridge.rValue(this.pool.Pop());
                } else {
                    mItem = Bridge.rValue(this.InnerCreateItem());
                }

Bridge.rValue(                mItem).gameObject.SetActive(true);
                this.usedArray.add(Bridge.rValue(mItem));

                if (this.nMaxCapicity > 0 && ((this.usedArray.Count + this.pool.Count) | 0) > this.nMaxCapicity) {
                    PrintTool.LogError("\u8d85\u51fa\u6700\u5927\u5bb9\u91cf\u9650\u5236\uff1a ", Bridge.box(this.nMaxCapicity, System.Int32));
                }
                return Bridge.rValue(mItem);
            },
            /*NodeComponentPool$1.popObj end.*/

            /*NodeComponentPool$1.SetMaxCapacity start.*/
            SetMaxCapacity: function (nMaxCapacity) {
                this.nMaxCapicity = nMaxCapacity;
            },
            /*NodeComponentPool$1.SetMaxCapacity end.*/

            /*NodeComponentPool$1.GetSumCount start.*/
            GetSumCount: function () {
                return ((this.usedArray.Count + this.pool.Count) | 0);
            },
            /*NodeComponentPool$1.GetSumCount end.*/

            /*NodeComponentPool$1.SetItemParent start.*/
            SetItemParent: function (ItemParent) {
                this.ItemParent = ItemParent;
            },
            /*NodeComponentPool$1.SetItemParent end.*/

            /*NodeComponentPool$1.preLoadObj start.*/
            preLoadObj: function (nMaxCount) {
                var nNowCount = this.GetSumCount();
                for (var j = nNowCount; j < nMaxCount; j = (j + 1) | 0) {
                    this.pool.Push(Bridge.rValue(this.InnerCreateItem()));
                }
            },
            /*NodeComponentPool$1.preLoadObj end.*/

            /*NodeComponentPool$1.preLoadObj$1 start.*/
            preLoadObj$1: function (nFrameCount, nCount, finishFunc) {
                if (finishFunc === void 0) { finishFunc = null; }
                var mFinishFunc = finishFunc;
                var nCreateCountSingle = Math.ceil(((Bridge.Int.div(nCount, nFrameCount)) | 0));

                var preLoadInnerFunc = Bridge.fn.bind(this, function () {
                    for (var j = 0; j < nCreateCountSingle; j = (j + 1) | 0) {
                        if (this.GetSumCount() >= nCount) {
                            if (!Bridge.staticEquals(mFinishFunc, null)) {
                                mFinishFunc();
                                mFinishFunc = null;
                            }
                            break;
                        }
                        this.pool.Push(Bridge.rValue(this.InnerCreateItem()));
                    }
                });

                var mTimer = Timer.New(preLoadInnerFunc, 0.0166666675, nFrameCount);
                mTimer.Start();
            },
            /*NodeComponentPool$1.preLoadObj$1 end.*/


        },
        overloads: {
            "preLoadObj(int, int, Action)": "preLoadObj$1"
        }
    }; });
    /*NodeComponentPool$1 end.*/

    /*NodePool start.*/
    Bridge.define("NodePool", {
        fields: {
            pool: null,
            usedArray: null,
            mItemPrefab: null,
            ItemParent: null,
            nMaxCapicity: 0
        },
        ctors: {
            init: function () {
                this.pool = new (System.Collections.Generic.Stack$1(UnityEngine.GameObject)).ctor();
                this.usedArray = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                this.nMaxCapicity = -1;
            }
        },
        methods: {
            /*NodePool.Init start.*/
            Init: function (mItemPrefab, nInitCount) {
                if (nInitCount === void 0) { nInitCount = 0; }
                this.mItemPrefab = mItemPrefab;
                this.mItemPrefab.SetActive(false);
                this.ItemParent = this.mItemPrefab.transform.parent;

                this.preLoadObj(nInitCount);
            },
            /*NodePool.Init end.*/

            /*NodePool.InnerCreateItem start.*/
            InnerCreateItem: function () {
                var go = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.mItemPrefab);
                PrintTool.Assert(UnityEngine.GameObject.op_Inequality(go, null), "go is Null");
                go.transform.SetParent(this.ItemParent, false);
                go.SetActive(false);
                return go;
            },
            /*NodePool.InnerCreateItem end.*/

            /*NodePool.recycleObj start.*/
            recycleObj: function (obj) {
                obj.transform.SetParent(this.ItemParent, false);

                var nIndex = this.usedArray.indexOf(obj);
                PrintTool.Assert(nIndex >= 0, "recyleObj 000 Error: ", Bridge.box(nIndex, System.Int32));
                this.usedArray.removeAt(nIndex);
                nIndex = this.usedArray.indexOf(obj);
                PrintTool.Assert(nIndex === -1, "recyleObj 111 Error");
                obj.gameObject.SetActive(false);
                this.pool.Push(obj);
            },
            /*NodePool.recycleObj end.*/

            /*NodePool.popObj start.*/
            popObj: function () {
                var mItem = null;
                if (this.pool.Count > 0) {
                    mItem = this.pool.Pop();
                } else {
                    mItem = this.InnerCreateItem();
                }

                mItem.gameObject.SetActive(true);
                this.usedArray.add(mItem);

                if (this.nMaxCapicity > 0 && ((this.usedArray.Count + this.pool.Count) | 0) > this.nMaxCapicity) {
                    PrintTool.LogError("\u8d85\u51fa\u6700\u5927\u5bb9\u91cf\u9650\u5236\uff1a ", Bridge.box(this.nMaxCapicity, System.Int32));
                }
                return mItem;
            },
            /*NodePool.popObj end.*/

            /*NodePool.SetMaxCapacity start.*/
            SetMaxCapacity: function (nMaxCapacity) {
                this.nMaxCapicity = nMaxCapacity;
            },
            /*NodePool.SetMaxCapacity end.*/

            /*NodePool.GetSumCount start.*/
            GetSumCount: function () {
                return ((this.usedArray.Count + this.pool.Count) | 0);
            },
            /*NodePool.GetSumCount end.*/

            /*NodePool.SetItemParent start.*/
            SetItemParent: function (ItemParent) {
                this.ItemParent = ItemParent;
            },
            /*NodePool.SetItemParent end.*/

            /*NodePool.preLoadObj start.*/
            preLoadObj: function (nMaxCount) {
                var nNowCount = this.GetSumCount();
                for (var j = nNowCount; j < nMaxCount; j = (j + 1) | 0) {
                    this.pool.Push(this.InnerCreateItem());
                }
            },
            /*NodePool.preLoadObj end.*/

            /*NodePool.preLoadObj$1 start.*/
            preLoadObj$1: function (nFrameCount, nCount, finishFunc) {
                if (finishFunc === void 0) { finishFunc = null; }
                var mFinishFunc = finishFunc;
                var nCreateCountSingle = Math.ceil(((Bridge.Int.div(nCount, nFrameCount)) | 0));

                var preLoadInnerFunc = Bridge.fn.bind(this, function () {
                    for (var j = 0; j < nCreateCountSingle; j = (j + 1) | 0) {
                        if (this.GetSumCount() >= nCount) {
                            if (!Bridge.staticEquals(mFinishFunc, null)) {
                                mFinishFunc();
                                mFinishFunc = null;
                            }
                            break;
                        }
                        this.pool.Push(this.InnerCreateItem());
                    }
                });

                var mTimer = Timer.New(preLoadInnerFunc, 0.0166666675, nFrameCount);
                mTimer.Start();
            },
            /*NodePool.preLoadObj$1 end.*/

            /*NodePool.preLoadObj_Co start.*/
            preLoadObj_Co: function (nFrameCount, nCount, finishFunc) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    mFinishFunc,
                    nCreateCountSingle,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (finishFunc === void 0) { finishFunc = null; }
                                        mFinishFunc = finishFunc;
                                        nCreateCountSingle = Math.ceil(((Bridge.Int.div(nCount, nFrameCount)) | 0));
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( this.GetSumCount() < nCount ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    for (var j = 0; j < nCreateCountSingle; j = (j + 1) | 0) {
                                            if (this.GetSumCount() >= nCount) {
                                                if (!Bridge.staticEquals(mFinishFunc, null)) {
                                                    mFinishFunc();
                                                    mFinishFunc = null;
                                                }
                                                break;
                                            }
                                            this.pool.Push(this.InnerCreateItem());
                                        }
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*NodePool.preLoadObj_Co end.*/


        },
        overloads: {
            "preLoadObj(int, int, Action)": "preLoadObj$1"
        }
    });
    /*NodePool end.*/

    /*PrintTool start.*/
    Bridge.define("PrintTool", {
        statics: {
            fields: {
                mStringBuilder: null
            },
            ctors: {
                init: function () {
                    this.mStringBuilder = new System.Text.StringBuilder();
                }
            },
            methods: {
                /*PrintTool.GetStr:static start.*/
                GetStr: function (data1, data2, data3, data4, data5, data6, data7, data8, data9) {
                    if (data2 === void 0) { data2 = null; }
                    if (data3 === void 0) { data3 = null; }
                    if (data4 === void 0) { data4 = null; }
                    if (data5 === void 0) { data5 = null; }
                    if (data6 === void 0) { data6 = null; }
                    if (data7 === void 0) { data7 = null; }
                    if (data8 === void 0) { data8 = null; }
                    if (data9 === void 0) { data9 = null; }
                    PrintTool.mStringBuilder.clear();
                    if (data1 != null) {
                        PrintTool.mStringBuilder.append(System.String.concat(data1, "___"));
                    }
                    if (data2 != null) {
                        PrintTool.mStringBuilder.append(System.String.concat(data2, "___"));
                    }
                    if (data3 != null) {
                        PrintTool.mStringBuilder.append(System.String.concat(data3, "___"));
                    }
                    if (data4 != null) {
                        PrintTool.mStringBuilder.append(System.String.concat(data4, "___"));
                    }
                    if (data5 != null) {
                        PrintTool.mStringBuilder.append(System.String.concat(data5, "___"));
                    }
                    if (data6 != null) {
                        PrintTool.mStringBuilder.append(System.String.concat(data6, "___"));
                    }
                    if (data7 != null) {
                        PrintTool.mStringBuilder.append(System.String.concat(data7, "___"));
                    }
                    if (data8 != null) {
                        PrintTool.mStringBuilder.append(System.String.concat(data8, "___"));
                    }
                    if (data9 != null) {
                        PrintTool.mStringBuilder.append(System.String.concat(data9, "___"));
                    }
                    return PrintTool.mStringBuilder.toString();
                },
                /*PrintTool.GetStr:static end.*/

                /*PrintTool.LogWithColor:static start.*/
                LogWithColor: function (data1, data2, data3, data4, data5, data6, data7, data8, data9) {
                    if (data2 === void 0) { data2 = null; }
                    if (data3 === void 0) { data3 = null; }
                    if (data4 === void 0) { data4 = null; }
                    if (data5 === void 0) { data5 = null; }
                    if (data6 === void 0) { data6 = null; }
                    if (data7 === void 0) { data7 = null; }
                    if (data8 === void 0) { data8 = null; }
                    if (data9 === void 0) { data9 = null; }
                },
                /*PrintTool.LogWithColor:static end.*/

                /*PrintTool.LogFormatWithColor:static start.*/
                LogFormatWithColor: function (formatStr, data1, data2, data3, data4, data5, data6, data7, data8, data9) {
                    if (data2 === void 0) { data2 = null; }
                    if (data3 === void 0) { data3 = null; }
                    if (data4 === void 0) { data4 = null; }
                    if (data5 === void 0) { data5 = null; }
                    if (data6 === void 0) { data6 = null; }
                    if (data7 === void 0) { data7 = null; }
                    if (data8 === void 0) { data8 = null; }
                    if (data9 === void 0) { data9 = null; }
                },
                /*PrintTool.LogFormatWithColor:static end.*/

                /*PrintTool.LogJsonObj:static start.*/
                LogJsonObj: function (data) { },
                /*PrintTool.LogJsonObj:static end.*/

                /*PrintTool.Log:static start.*/
                Log: function (data1, data2, data3, data4, data5, data6, data7, data8, data9) {
                    if (data2 === void 0) { data2 = null; }
                    if (data3 === void 0) { data3 = null; }
                    if (data4 === void 0) { data4 = null; }
                    if (data5 === void 0) { data5 = null; }
                    if (data6 === void 0) { data6 = null; }
                    if (data7 === void 0) { data7 = null; }
                    if (data8 === void 0) { data8 = null; }
                    if (data9 === void 0) { data9 = null; }
                },
                /*PrintTool.Log:static end.*/

                /*PrintTool.LogFormat:static start.*/
                LogFormat: function (formatStr, data1, data2, data3, data4, data5, data6, data7, data8, data9) {
                    if (data2 === void 0) { data2 = null; }
                    if (data3 === void 0) { data3 = null; }
                    if (data4 === void 0) { data4 = null; }
                    if (data5 === void 0) { data5 = null; }
                    if (data6 === void 0) { data6 = null; }
                    if (data7 === void 0) { data7 = null; }
                    if (data8 === void 0) { data8 = null; }
                    if (data9 === void 0) { data9 = null; }
                },
                /*PrintTool.LogFormat:static end.*/

                /*PrintTool.LogError:static start.*/
                LogError: function (data1, data2, data3, data4, data5, data6, data7, data8, data9) {
                    if (data2 === void 0) { data2 = null; }
                    if (data3 === void 0) { data3 = null; }
                    if (data4 === void 0) { data4 = null; }
                    if (data5 === void 0) { data5 = null; }
                    if (data6 === void 0) { data6 = null; }
                    if (data7 === void 0) { data7 = null; }
                    if (data8 === void 0) { data8 = null; }
                    if (data9 === void 0) { data9 = null; }
                },
                /*PrintTool.LogError:static end.*/

                /*PrintTool.LogErrorFormat:static start.*/
                LogErrorFormat: function (formatStr, data1, data2, data3, data4, data5, data6, data7, data8, data9) {
                    if (data2 === void 0) { data2 = null; }
                    if (data3 === void 0) { data3 = null; }
                    if (data4 === void 0) { data4 = null; }
                    if (data5 === void 0) { data5 = null; }
                    if (data6 === void 0) { data6 = null; }
                    if (data7 === void 0) { data7 = null; }
                    if (data8 === void 0) { data8 = null; }
                    if (data9 === void 0) { data9 = null; }
                },
                /*PrintTool.LogErrorFormat:static end.*/

                /*PrintTool.Assert:static start.*/
                Assert: function (isTrue, data1, data2, data3, data4, data5, data6, data7, data8, data9) {
                    if (data1 === void 0) { data1 = null; }
                    if (data2 === void 0) { data2 = null; }
                    if (data3 === void 0) { data3 = null; }
                    if (data4 === void 0) { data4 = null; }
                    if (data5 === void 0) { data5 = null; }
                    if (data6 === void 0) { data6 = null; }
                    if (data7 === void 0) { data7 = null; }
                    if (data8 === void 0) { data8 = null; }
                    if (data9 === void 0) { data9 = null; }
                },
                /*PrintTool.Assert:static end.*/

                /*PrintTool.AssertFormat:static start.*/
                AssertFormat: function (isTrue, formatStr, data1, data2, data3, data4, data5, data6, data7, data8, data9) {
                    if (data1 === void 0) { data1 = null; }
                    if (data2 === void 0) { data2 = null; }
                    if (data3 === void 0) { data3 = null; }
                    if (data4 === void 0) { data4 = null; }
                    if (data5 === void 0) { data5 = null; }
                    if (data6 === void 0) { data6 = null; }
                    if (data7 === void 0) { data7 = null; }
                    if (data8 === void 0) { data8 = null; }
                    if (data9 === void 0) { data9 = null; }
                },
                /*PrintTool.AssertFormat:static end.*/


            }
        }
    });
    /*PrintTool end.*/

    /*RandomTool start.*/
    Bridge.define("RandomTool", {
        statics: {
            fields: {
                random: null
            },
            ctors: {
                ctor: function () {
                    var nSeed = System.Int64.clip32(System.DateTime.getTicks(System.DateTime.getNow()).mod(System.Int64(2147483647)));
                    RandomTool.random = new System.Random.$ctor1(nSeed);
                }
            },
            methods: {
                /*RandomTool.RandomInt:static start.*/
                RandomInt: function (min, max) {
                    return RandomTool.random.Next$2(min, ((max + 1) | 0));
                },
                /*RandomTool.RandomInt:static end.*/

                /*RandomTool.RandomArrayIndex:static start.*/
                RandomArrayIndex: function (min, max) {
                    return RandomTool.random.Next$2(min, max);
                },
                /*RandomTool.RandomArrayIndex:static end.*/

                /*RandomTool.Random:static start.*/
                Random: function (number) {
                    return RandomTool.RandomInt(0, number);
                },
                /*RandomTool.Random:static end.*/

                /*RandomTool.GetIndexByRate:static start.*/
                GetIndexByRate: function (rateArray) {
                    var $t;
                    var nSumRate = 0;
                    $t = Bridge.getEnumerator(rateArray);
                    try {
                        while ($t.moveNext()) {
                            var v = $t.Current;
                            nSumRate = (nSumRate + v) | 0;
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    var nTempTargetRate = (nSumRate + 1) | 0;
                    if (nSumRate >= 1) {
                        nTempTargetRate = RandomTool.RandomInt(1, ((nSumRate + 1) | 0));
                    }

                    var nTempRate = 0;
                    var nTargetIndex = -1;
                    for (var i = 0; i < rateArray.Count; i = (i + 1) | 0) {
                        nTempRate = (nTempRate + rateArray.getItem(i)) | 0;
                        if (nTempRate >= nTempTargetRate) {
                            nTargetIndex = i;
                            break;
                        }
                    }

                    return nTargetIndex;
                },
                /*RandomTool.GetIndexByRate:static end.*/


            }
        }
    });
    /*RandomTool end.*/

    /*Singleton$1 start.*/
    /**
     * 如果实现单例，就继承这个类
     *
     * @abstract
     * @public
     * @class Singleton$1
     * @param   {Function}    [name]
     */
    Bridge.define("Singleton$1", function (T) { return {
        statics: {
            fields: {
                instance: null
            },
            props: {
                Instance: {
                    get: function () {
                        return Bridge.rValue(Singleton$1(T).instance);
                    }
                },
                readOnlyInstance: {
                    get: function () {
                        return Bridge.rValue(Singleton$1(T).instance);
                    }
                }
            },
            ctors: {
                init: function () {
                    this.instance = Bridge.createInstance(T);
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                UnityEngine.Debug.Assert(Bridge.rValue(Singleton$1(T).instance) == null, "\u5355\u4f8b\u6a21\u5f0f, \u4e0d\u53ef\u4ee5\u518d New(): " + (Bridge.getTypeName(Bridge.getType(this)) || ""));
            }
        }
    }; });
    /*Singleton$1 end.*/

    /*TimeOutGenerator start.*/
    Bridge.define("TimeOutGenerator", {
        statics: {
            methods: {
                /*TimeOutGenerator.New:static start.*/
                New: function (fInternalTime) {
                    var temp = new TimeOutGenerator();
                    temp.Init(fInternalTime);
                    return temp;
                },
                /*TimeOutGenerator.New:static end.*/


            }
        },
        fields: {
            fLastUpdateTime: 0,
            fInternalTime: 0
        },
        ctors: {
            init: function () {
                this.fLastUpdateTime = 0;
                this.fInternalTime = 0;
            }
        },
        methods: {
            /*TimeOutGenerator.Init start.*/
            Init: function (fInternalTime) {
                if (fInternalTime === void 0) { fInternalTime = 1.0; }
                this.fInternalTime = fInternalTime;
                this.Reset();
            },
            /*TimeOutGenerator.Init end.*/

            /*TimeOutGenerator.Reset start.*/
            Reset: function () {
                this.fLastUpdateTime = UnityEngine.Time.time;
            },
            /*TimeOutGenerator.Reset end.*/

            /*TimeOutGenerator.orTimeOut start.*/
            orTimeOut: function () {
                if ((UnityEngine.Time.time - this.fLastUpdateTime) > this.fInternalTime) {
                    this.Reset();
                    return true;
                }

                return false;
            },
            /*TimeOutGenerator.orTimeOut end.*/

            /*TimeOutGenerator.orTimeOutWithSpecialTime start.*/
            orTimeOutWithSpecialTime: function (fInternalTime) {
                if (UnityEngine.Time.time - this.fLastUpdateTime > fInternalTime) {
                    this.Reset();
                    return true;
                }

                return false;
            },
            /*TimeOutGenerator.orTimeOutWithSpecialTime end.*/


        }
    });
    /*TimeOutGenerator end.*/

    /*Timer start.*/
    Bridge.define("Timer", {
        statics: {
            methods: {
                /*Timer.New:static start.*/
                New: function (func, duration, loop, unscaled) {
                    if (loop === void 0) { loop = 1; }
                    if (unscaled === void 0) { unscaled = false; }
                    var o = new Timer();
                    o.func = func;
                    o.duration = duration;
                    o.time = duration;
                    o.loop = loop;
                    o.unscaled = unscaled;
                    o.running = false;
                    return o;
                },
                /*Timer.New:static end.*/


            }
        },
        fields: {
            unscaled: false,
            loop: 0,
            duration: 0,
            time: 0,
            running: false,
            func: null
        },
        ctors: {
            init: function () {
                this.unscaled = false;
                this.loop = 0;
                this.duration = 0.0;
                this.time = 0.0;
                this.running = false;
            }
        },
        methods: {
            /*Timer.Start start.*/
            Start: function () {
                this.running = true;
                SingleTonMonoBehaviour$1(TimeMgr).Instance.AddListener(Bridge.fn.cacheBind(this, this.Update));
            },
            /*Timer.Start end.*/

            /*Timer.Reset start.*/
            Reset: function (func, duration, loop, unscaled) {
                if (loop === void 0) { loop = 1; }
                if (unscaled === void 0) { unscaled = false; }
                this.duration = duration;
                this.loop = loop;
                this.unscaled = unscaled;
                this.func = func;
                this.time = duration;
            },
            /*Timer.Reset end.*/

            /*Timer.Stop start.*/
            Stop: function () {
                this.running = false;
                SingleTonMonoBehaviour$1(TimeMgr).Instance.RemoveListener(Bridge.fn.cacheBind(this, this.Update));
            },
            /*Timer.Stop end.*/

            /*Timer.Update start.*/
            Update: function () {
                if (!this.running) {
                    return;
                }

                var delta = this.unscaled ? UnityEngine.Time.unscaledDeltaTime : UnityEngine.Time.deltaTime;
                this.time = this.time - delta;

                if (this.time <= 0) {
                    this.func();

                    if (this.loop > 0) {
                        this.loop = (this.loop - 1) | 0;
                        this.time = this.time + this.duration;
                    }

                    if (this.loop === 0) {
                        this.Stop();
                    } else if (this.loop < 0) {
                        this.time = this.time + this.duration;
                    }
                }
            },
            /*Timer.Update end.*/


        }
    });
    /*Timer end.*/

    /*TimerWithGo start.*/
    Bridge.define("TimerWithGo", {
        fields: {
            unscaled: false,
            loop: 0,
            duration: 0,
            time: 0,
            running: false,
            func: null,
            go: null
        },
        ctors: {
            init: function () {
                this.unscaled = false;
                this.loop = 0;
                this.duration = 0.0;
                this.time = 0.0;
                this.running = false;
            }
        },
        methods: {
            /*TimerWithGo.New start.*/
            New: function (go, func, duration, loop, unscaled) {
                if (loop === void 0) { loop = 1; }
                if (unscaled === void 0) { unscaled = false; }
                var o = new TimerWithGo();
                o.go = go;
                o.func = func;
                o.duration = duration;
                o.time = duration;
                o.loop = loop;
                o.unscaled = unscaled;
                o.running = false;
                return o;
            },
            /*TimerWithGo.New end.*/

            /*TimerWithGo.Start start.*/
            Start: function () {
                this.running = true;
                SingleTonMonoBehaviour$1(TimeMgr).Instance.AddListener(Bridge.fn.cacheBind(this, this.Update));
            },
            /*TimerWithGo.Start end.*/

            /*TimerWithGo.Stop start.*/
            Stop: function () {
                this.running = false;
                SingleTonMonoBehaviour$1(TimeMgr).Instance.RemoveListener(Bridge.fn.cacheBind(this, this.Update));
            },
            /*TimerWithGo.Stop end.*/

            /*TimerWithGo.Update start.*/
            Update: function () {
                if (!this.running) {
                    return;
                }

                if (UnityEngine.GameObject.op_Equality(this.go, null)) {
                    this.Stop();
                    return;
                }

                var delta = this.unscaled ? UnityEngine.Time.unscaledDeltaTime : UnityEngine.Time.deltaTime;
                this.time = this.time - delta;

                if (this.time <= 0) {
                    this.func();

                    if (this.loop > 0) {
                        this.loop = (this.loop - 1) | 0;
                        this.time = this.time + this.duration;
                    }

                    if (this.loop === 0) {
                        this.Stop();
                    } else if (this.loop < 0) {
                        this.time = this.time + this.duration;
                    }
                }
            },
            /*TimerWithGo.Update end.*/


        }
    });
    /*TimerWithGo end.*/

    /*TweenAction start.*/
    Bridge.define("TweenAction", {
        $kind: 6,
        statics: {
            fields: {
                MOVE_X: 0,
                MOVE_Y: 1,
                MOVE_Z: 2,
                MOVE_LOCAL_X: 3,
                MOVE_LOCAL_Y: 4,
                MOVE_LOCAL_Z: 5,
                MOVE_CURVED: 6,
                MOVE_CURVED_LOCAL: 7,
                MOVE_SPLINE: 8,
                MOVE_SPLINE_LOCAL: 9,
                SCALE_X: 10,
                SCALE_Y: 11,
                SCALE_Z: 12,
                ROTATE_X: 13,
                ROTATE_Y: 14,
                ROTATE_Z: 15,
                ROTATE_AROUND: 16,
                ROTATE_AROUND_LOCAL: 17,
                CANVAS_ROTATEAROUND: 18,
                CANVAS_ROTATEAROUND_LOCAL: 19,
                CANVAS_PLAYSPRITE: 20,
                ALPHA: 21,
                TEXT_ALPHA: 22,
                CANVAS_ALPHA: 23,
                CANVASGROUP_ALPHA: 24,
                ALPHA_VERTEX: 25,
                COLOR: 26,
                CALLBACK_COLOR: 27,
                TEXT_COLOR: 28,
                CANVAS_COLOR: 29,
                CANVAS_MOVE_X: 30,
                CANVAS_MOVE_Y: 31,
                CANVAS_MOVE_Z: 32,
                CALLBACK: 33,
                MOVE: 34,
                MOVE_LOCAL: 35,
                MOVE_TO_TRANSFORM: 36,
                ROTATE: 37,
                ROTATE_LOCAL: 38,
                SCALE: 39,
                VALUE3: 40,
                GUI_MOVE: 41,
                GUI_MOVE_MARGIN: 42,
                GUI_SCALE: 43,
                GUI_ALPHA: 44,
                GUI_ROTATE: 45,
                DELAYED_SOUND: 46,
                CANVAS_MOVE: 47,
                CANVAS_SCALE: 48,
                CANVAS_SIZEDELTA: 49,
                FOLLOW: 50,
                NONE: 51
            }
        }
    });
    /*TweenAction end.*/

    /*UnityEngineObjectExtention start.*/
    Bridge.define("UnityEngineObjectExtention", {
        statics: {
            methods: {
                /*UnityEngineObjectExtention.rectTransform:static start.*/
                rectTransform: function (go) {
                    return Bridge.as(go.transform, UnityEngine.RectTransform);
                },
                /*UnityEngineObjectExtention.rectTransform:static end.*/

                /*UnityEngineObjectExtention.rectTransform$1:static start.*/
                rectTransform$1: function (go) {
                    return Bridge.as(go, UnityEngine.RectTransform);
                },
                /*UnityEngineObjectExtention.rectTransform$1:static end.*/

                /*UnityEngineObjectExtention.FindDeepChild:static start.*/
                FindDeepChild: function (aParent, aName) {
                    var $t;
                    var result = aParent.Find(aName);
                    if (UnityEngine.Component.op_Inequality(result, null)) {
                        return result;
                    }

                    $t = Bridge.getEnumerator(aParent);
                    try {
                        while ($t.moveNext()) {
                            var child = Bridge.cast($t.Current, UnityEngine.Transform);
                            result = UnityEngineObjectExtention.FindDeepChild(child, aName);
                            if (UnityEngine.Component.op_Inequality(result, null)) {
                                return result;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return null;
                },
                /*UnityEngineObjectExtention.FindDeepChild:static end.*/

                /*UnityEngineObjectExtention.SetAlpha:static start.*/
                SetAlpha: function (obj, alpha) {
                    var oriColor = obj.color.$clone();
                    obj.color = new pc.Color( oriColor.r, oriColor.g, oriColor.b, alpha );
                },
                /*UnityEngineObjectExtention.SetAlpha:static end.*/

                /*UnityEngineObjectExtention.AddMissComponent:static start.*/
                AddMissComponent: function (T, obj) {
                    var t = Bridge.rValue(obj.GetComponent(T));
                    if (Bridge.rValue(t) == null) {
                        t = Bridge.rValue(obj.AddComponent(T));
                    }
                    return Bridge.rValue(t);
                },
                /*UnityEngineObjectExtention.AddMissComponent:static end.*/

                /*UnityEngineObjectExtention.AddMissComponent$1:static start.*/
                AddMissComponent$1: function (go, t) {
                    if (UnityEngine.GameObject.op_Inequality(null, go)) {
                        var component = go.GetComponent$1(t);
                        if (UnityEngine.Component.op_Equality(null, component)) {
                            component = go.AddComponent$1(t);
                        }
                        return component;
                    }
                    UnityEngine.Debug.LogWarning$1("\u8981\u6dfb\u52a0\u7ec4\u4ef6\u7684\u7269\u4f53\u4e3a\u7a7a\uff01");
                    return null;
                },
                /*UnityEngineObjectExtention.AddMissComponent$1:static end.*/

                /*UnityEngineObjectExtention.removeAllChildren:static start.*/
                removeAllChildren: function (obj) {
                    var $t;
                    $t = Bridge.getEnumerator(obj.transform);
                    try {
                        while ($t.moveNext()) {
                            var v = Bridge.cast($t.Current, UnityEngine.Transform);
                            UnityEngine.Object.Destroy(v.gameObject);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                },
                /*UnityEngineObjectExtention.removeAllChildren:static end.*/

                /*UnityEngineObjectExtention.GetTreeName:static start.*/
                GetTreeName: function (go) {
                    var treeName = go.name;
                    var tempTran = go.transform;
                    while (UnityEngine.Component.op_Inequality(tempTran.parent, null)) {
                        tempTran = tempTran.parent;
                        treeName = (tempTran.name || "") + "/" + (treeName || "");
                    }
                    return treeName;
                },
                /*UnityEngineObjectExtention.GetTreeName:static end.*/


            }
        }
    });
    /*UnityEngineObjectExtention end.*/

    /*DbSaveByOnApplicationPauseMgr start.*/
    Bridge.define("DbSaveByOnApplicationPauseMgr", {
        inherits: function () { return [SingleTonMonoBehaviour$1(DbSaveByOnApplicationPauseMgr)]; },
        fields: {
            mPauseEventList: null
        },
        ctors: {
            init: function () {
                this.mPauseEventList = new (System.Collections.Generic.List$1(Function)).ctor();
            }
        },
        methods: {
            /*DbSaveByOnApplicationPauseMgr.OnApplicationPause start.*/
            OnApplicationPause: function (pauseStatus) {
                if (pauseStatus) {
                    this.Fire();
                }
            },
            /*DbSaveByOnApplicationPauseMgr.OnApplicationPause end.*/

            /*DbSaveByOnApplicationPauseMgr.OnDisable start.*/
            OnDisable: function () {
                this.Fire();
            },
            /*DbSaveByOnApplicationPauseMgr.OnDisable end.*/

            /*DbSaveByOnApplicationPauseMgr.Fire start.*/
            Fire: function () {
                for (var i = 0; i < this.mPauseEventList.Count; i = (i + 1) | 0) {
                    var mEvent = this.mPauseEventList.getItem(i);
                    mEvent();
                }
            },
            /*DbSaveByOnApplicationPauseMgr.Fire end.*/

            /*DbSaveByOnApplicationPauseMgr.AddListener start.*/
            AddListener: function (mFunc) {
                this.mPauseEventList.add(mFunc);
            },
            /*DbSaveByOnApplicationPauseMgr.AddListener end.*/

            /*DbSaveByOnApplicationPauseMgr.RemoveListener start.*/
            RemoveListener: function (mFunc) {
                this.mPauseEventList.remove(mFunc);
            },
            /*DbSaveByOnApplicationPauseMgr.RemoveListener end.*/


        }
    });
    /*DbSaveByOnApplicationPauseMgr end.*/

    /*FixedTimeMgr start.*/
    Bridge.define("FixedTimeMgr", {
        inherits: function () { return [SingleTonMonoBehaviour$1(FixedTimeMgr)]; },
        fields: {
            mapUpdateFunc: null
        },
        ctors: {
            init: function () {
                this.mapUpdateFunc = new (System.Collections.Generic.List$1(Function)).ctor();
            }
        },
        methods: {
            /*FixedTimeMgr.FixedUpdate start.*/
            FixedUpdate: function () {
                var nUpdateCount = this.mapUpdateFunc.Count;
                for (var i = (nUpdateCount - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    this.mapUpdateFunc.getItem(i)();
                }
            },
            /*FixedTimeMgr.FixedUpdate end.*/

            /*FixedTimeMgr.AddListener start.*/
            AddListener: function (func) {
                if (this.mapUpdateFunc.indexOf(func) === -1) {
                    this.mapUpdateFunc.add(func);
                }
            },
            /*FixedTimeMgr.AddListener end.*/

            /*FixedTimeMgr.RemoveListener start.*/
            RemoveListener: function (func) {
                this.mapUpdateFunc.remove(func);
            },
            /*FixedTimeMgr.RemoveListener end.*/


        }
    });
    /*FixedTimeMgr end.*/

    /*TimeMgr start.*/
    Bridge.define("TimeMgr", {
        inherits: function () { return [SingleTonMonoBehaviour$1(TimeMgr)]; },
        fields: {
            mapUpdateFunc: null
        },
        ctors: {
            init: function () {
                this.mapUpdateFunc = new (System.Collections.Generic.List$1(Function)).ctor();
            }
        },
        methods: {
            /*TimeMgr.Update start.*/
            Update: function () {
                var nUpdateCount = this.mapUpdateFunc.Count;
                for (var i = 0; i < nUpdateCount; i = (i + 1) | 0) {
                    if (i < this.mapUpdateFunc.Count) {
                        this.mapUpdateFunc.getItem(i)();
                    } else {
                        break;
                    }
                }
            },
            /*TimeMgr.Update end.*/

            /*TimeMgr.AddListener start.*/
            AddListener: function (func) {
                if (this.mapUpdateFunc.indexOf(func) === -1) {
                    this.mapUpdateFunc.add(func);
                }
            },
            /*TimeMgr.AddListener end.*/

            /*TimeMgr.RemoveListener start.*/
            RemoveListener: function (func) {
                this.mapUpdateFunc.remove(func);
            },
            /*TimeMgr.RemoveListener end.*/


        }
    });
    /*TimeMgr end.*/
    /** @namespace System */

    /**
     * @memberof System
     * @callback System.Action
     * @param   {boolean}    arg
     * @return  {void}
     */


    /*WWWTools start.*/
    Bridge.define("WWWTools", {
        inherits: function () { return [SingleTonMonoBehaviour$1(WWWTools)]; },
        methods: {
            /*WWWTools.PostJsonData start.*/
            /**
             * post请求
             *
             * @instance
             * @public
             * @this WWWTools
             * @memberof WWWTools
             * @param   {string}           url       请求的url
             * @param   {string}           json      传输的数据
             * @param   {System.Action}    result
             * @return  {void}
             */
            PostJsonData: function (url, json, result) {
                if (result === void 0) { result = null; }
                UnityEngine.Debug.Log$1("PostJsonData json: " + (json || ""));
                this.StartCoroutine$1(this.PostJsonData1(url, json, result));
            },
            /*WWWTools.PostJsonData end.*/

            /*WWWTools.PostJsonData1 start.*/
            PostJsonData1: function (url, json, result) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    www,
                    bSuccess,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (result === void 0) { result = null; }
                                        www = UnityEngine.Networking.UnityWebRequest.Post$4(url, json, "text");
                                        www.uploadHandler = new UnityEngine.Networking.UploadHandlerRaw.$ctor1(System.Text.Encoding.UTF8.GetBytes$2(json));
                                        www.SetRequestHeader("Content-Type", "application/json");

                                        $enumerator.current = www.SendWebRequest();
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    bSuccess = System.String.isNullOrWhiteSpace(www.error);
                                        result(bSuccess);

                                        if (bSuccess) {
                                            UnityEngine.Debug.Log$1("WWWHelper PostJsonData Success:" + (www.downloadHandler.text || ""));
                                        } else {
                                            UnityEngine.Debug.Log$1("Error: " + (www.error || ""));
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*WWWTools.PostJsonData1 end.*/


        }
    });
    /*WWWTools end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","UnityEngine.SceneManagement","UnityEngine.UI","System.Collections.Generic","System.Collections","UnityEngine.U2D","System.Text"];

    /*LeanSmooth start.*/
    $m("LeanSmooth", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"bounceOut","is":true,"t":8,"pi":[{"n":"current","pt":$n[0].Single,"ps":0},{"n":"target","pt":$n[0].Single,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[0].Single,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"friction","dv":2.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"accelRate","dv":0.5,"o":true,"pt":$n[0].Single,"ps":7},{"n":"hitDamping","dv":0.9,"o":true,"pt":$n[0].Single,"ps":8}],"sn":"bounceOut","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"bounceOut","is":true,"t":8,"pi":[{"n":"current","pt":$n[1].Color,"ps":0},{"n":"target","pt":$n[1].Color,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[1].Color,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"friction","dv":2.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"accelRate","dv":0.5,"o":true,"pt":$n[0].Single,"ps":7},{"n":"hitDamping","dv":0.9,"o":true,"pt":$n[0].Single,"ps":8}],"sn":"bounceOut$1","rt":$n[1].Color,"p":[$n[1].Color,$n[1].Color,$n[1].Color,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"bounceOut","is":true,"t":8,"pi":[{"n":"current","pt":$n[1].Vector3,"ps":0},{"n":"target","pt":$n[1].Vector3,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[1].Vector3,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"friction","dv":2.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"accelRate","dv":0.5,"o":true,"pt":$n[0].Single,"ps":7},{"n":"hitDamping","dv":0.9,"o":true,"pt":$n[0].Single,"ps":8}],"sn":"bounceOut$2","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[1].Vector3,$n[1].Vector3,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"damp","is":true,"t":8,"pi":[{"n":"current","pt":$n[0].Single,"ps":0},{"n":"target","pt":$n[0].Single,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[0].Single,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5}],"sn":"damp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"damp","is":true,"t":8,"pi":[{"n":"current","pt":$n[1].Color,"ps":0},{"n":"target","pt":$n[1].Color,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[1].Color,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5}],"sn":"damp$1","rt":$n[1].Color,"p":[$n[1].Color,$n[1].Color,$n[1].Color,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"damp","is":true,"t":8,"pi":[{"n":"current","pt":$n[1].Vector3,"ps":0},{"n":"target","pt":$n[1].Vector3,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[1].Vector3,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5}],"sn":"damp$2","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[1].Vector3,$n[1].Vector3,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"linear","is":true,"t":8,"pi":[{"n":"current","pt":$n[1].Color,"ps":0},{"n":"target","pt":$n[1].Color,"ps":1},{"n":"moveSpeed","pt":$n[0].Single,"ps":2}],"sn":"linear$1","rt":$n[1].Color,"p":[$n[1].Color,$n[1].Color,$n[0].Single]},{"a":2,"n":"linear","is":true,"t":8,"pi":[{"n":"current","pt":$n[0].Single,"ps":0},{"n":"target","pt":$n[0].Single,"ps":1},{"n":"moveSpeed","pt":$n[0].Single,"ps":2},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"linear","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"linear","is":true,"t":8,"pi":[{"n":"current","pt":$n[1].Vector3,"ps":0},{"n":"target","pt":$n[1].Vector3,"ps":1},{"n":"moveSpeed","pt":$n[0].Single,"ps":2},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"linear$2","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[1].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"spring","is":true,"t":8,"pi":[{"n":"current","pt":$n[0].Single,"ps":0},{"n":"target","pt":$n[0].Single,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[0].Single,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"friction","dv":2.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"accelRate","dv":0.5,"o":true,"pt":$n[0].Single,"ps":7}],"sn":"spring","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spring","is":true,"t":8,"pi":[{"n":"current","pt":$n[1].Color,"ps":0},{"n":"target","pt":$n[1].Color,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[1].Color,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"friction","dv":2.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"accelRate","dv":0.5,"o":true,"pt":$n[0].Single,"ps":7}],"sn":"spring$1","rt":$n[1].Color,"p":[$n[1].Color,$n[1].Color,$n[1].Color,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"spring","is":true,"t":8,"pi":[{"n":"current","pt":$n[1].Vector3,"ps":0},{"n":"target","pt":$n[1].Vector3,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[1].Vector3,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"friction","dv":2.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"accelRate","dv":0.5,"o":true,"pt":$n[0].Single,"ps":7}],"sn":"spring$2","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[1].Vector3,$n[1].Vector3,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*LeanSmooth end.*/

    /*TweenAction start.*/
    $m("TweenAction", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ALPHA","is":true,"t":4,"rt":TweenAction,"sn":"ALPHA","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"ALPHA_VERTEX","is":true,"t":4,"rt":TweenAction,"sn":"ALPHA_VERTEX","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CALLBACK","is":true,"t":4,"rt":TweenAction,"sn":"CALLBACK","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CALLBACK_COLOR","is":true,"t":4,"rt":TweenAction,"sn":"CALLBACK_COLOR","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVASGROUP_ALPHA","is":true,"t":4,"rt":TweenAction,"sn":"CANVASGROUP_ALPHA","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_ALPHA","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_ALPHA","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_COLOR","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_COLOR","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_MOVE","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_MOVE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_MOVE_X","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_MOVE_X","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_MOVE_Y","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_MOVE_Y","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_MOVE_Z","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_MOVE_Z","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_PLAYSPRITE","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_PLAYSPRITE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_ROTATEAROUND","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_ROTATEAROUND","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_ROTATEAROUND_LOCAL","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_ROTATEAROUND_LOCAL","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_SCALE","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_SCALE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_SIZEDELTA","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_SIZEDELTA","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"COLOR","is":true,"t":4,"rt":TweenAction,"sn":"COLOR","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"DELAYED_SOUND","is":true,"t":4,"rt":TweenAction,"sn":"DELAYED_SOUND","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"FOLLOW","is":true,"t":4,"rt":TweenAction,"sn":"FOLLOW","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"GUI_ALPHA","is":true,"t":4,"rt":TweenAction,"sn":"GUI_ALPHA","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"GUI_MOVE","is":true,"t":4,"rt":TweenAction,"sn":"GUI_MOVE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"GUI_MOVE_MARGIN","is":true,"t":4,"rt":TweenAction,"sn":"GUI_MOVE_MARGIN","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"GUI_ROTATE","is":true,"t":4,"rt":TweenAction,"sn":"GUI_ROTATE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"GUI_SCALE","is":true,"t":4,"rt":TweenAction,"sn":"GUI_SCALE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE","is":true,"t":4,"rt":TweenAction,"sn":"MOVE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_CURVED","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_CURVED","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_CURVED_LOCAL","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_CURVED_LOCAL","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_LOCAL","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_LOCAL","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_LOCAL_X","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_LOCAL_X","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_LOCAL_Y","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_LOCAL_Y","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_LOCAL_Z","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_LOCAL_Z","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_SPLINE","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_SPLINE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_SPLINE_LOCAL","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_SPLINE_LOCAL","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_TO_TRANSFORM","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_TO_TRANSFORM","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_X","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_X","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_Y","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_Y","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_Z","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_Z","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"NONE","is":true,"t":4,"rt":TweenAction,"sn":"NONE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"ROTATE","is":true,"t":4,"rt":TweenAction,"sn":"ROTATE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"ROTATE_AROUND","is":true,"t":4,"rt":TweenAction,"sn":"ROTATE_AROUND","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"ROTATE_AROUND_LOCAL","is":true,"t":4,"rt":TweenAction,"sn":"ROTATE_AROUND_LOCAL","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"ROTATE_LOCAL","is":true,"t":4,"rt":TweenAction,"sn":"ROTATE_LOCAL","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"ROTATE_X","is":true,"t":4,"rt":TweenAction,"sn":"ROTATE_X","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"ROTATE_Y","is":true,"t":4,"rt":TweenAction,"sn":"ROTATE_Y","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"ROTATE_Z","is":true,"t":4,"rt":TweenAction,"sn":"ROTATE_Z","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"SCALE","is":true,"t":4,"rt":TweenAction,"sn":"SCALE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"SCALE_X","is":true,"t":4,"rt":TweenAction,"sn":"SCALE_X","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"SCALE_Y","is":true,"t":4,"rt":TweenAction,"sn":"SCALE_Y","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"SCALE_Z","is":true,"t":4,"rt":TweenAction,"sn":"SCALE_Z","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"TEXT_ALPHA","is":true,"t":4,"rt":TweenAction,"sn":"TEXT_ALPHA","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"TEXT_COLOR","is":true,"t":4,"rt":TweenAction,"sn":"TEXT_COLOR","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"VALUE3","is":true,"t":4,"rt":TweenAction,"sn":"VALUE3","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}}]}; }, $n);
    /*TweenAction end.*/

    /*LeanTweenType start.*/
    $m("LeanTweenType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"animationCurve","is":true,"t":4,"rt":LeanTweenType,"sn":"animationCurve","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"clamp","is":true,"t":4,"rt":LeanTweenType,"sn":"clamp","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInBack","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInBack","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInBounce","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInBounce","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInCirc","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInCirc","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInCubic","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInCubic","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInElastic","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInElastic","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInExpo","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInExpo","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutBack","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutBack","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutBounce","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutBounce","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutCirc","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutCirc","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutCubic","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutCubic","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutElastic","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutElastic","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutExpo","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutExpo","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutQuad","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutQuad","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutQuart","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutQuart","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutQuint","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutQuint","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutSine","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutSine","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInQuad","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInQuad","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInQuart","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInQuart","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInQuint","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInQuint","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInSine","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInSine","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutBack","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutBack","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutBounce","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutBounce","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutCirc","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutCirc","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutCubic","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutCubic","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutElastic","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutElastic","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutExpo","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutExpo","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutQuad","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutQuad","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutQuart","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutQuart","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutQuint","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutQuint","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutSine","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutSine","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeShake","is":true,"t":4,"rt":LeanTweenType,"sn":"easeShake","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeSpring","is":true,"t":4,"rt":LeanTweenType,"sn":"easeSpring","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"linear","is":true,"t":4,"rt":LeanTweenType,"sn":"linear","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"notUsed","is":true,"t":4,"rt":LeanTweenType,"sn":"notUsed","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"once","is":true,"t":4,"rt":LeanTweenType,"sn":"once","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"pingPong","is":true,"t":4,"rt":LeanTweenType,"sn":"pingPong","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"punch","is":true,"t":4,"rt":LeanTweenType,"sn":"punch","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}}]}; }, $n);
    /*LeanTweenType end.*/

    /*LeanProp start.*/
    $m("LeanProp", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"color","is":true,"t":4,"rt":LeanProp,"sn":"color","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"localPosition","is":true,"t":4,"rt":LeanProp,"sn":"localPosition","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"localX","is":true,"t":4,"rt":LeanProp,"sn":"localX","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"localY","is":true,"t":4,"rt":LeanProp,"sn":"localY","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"localZ","is":true,"t":4,"rt":LeanProp,"sn":"localZ","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"position","is":true,"t":4,"rt":LeanProp,"sn":"position","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"scale","is":true,"t":4,"rt":LeanProp,"sn":"scale","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"x","is":true,"t":4,"rt":LeanProp,"sn":"x","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"y","is":true,"t":4,"rt":LeanProp,"sn":"y","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"z","is":true,"t":4,"rt":LeanProp,"sn":"z","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}}]}; }, $n);
    /*LeanProp end.*/

    /*LeanTween start.*/
    $m("LeanTween", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"add","is":true,"t":8,"pi":[{"n":"a","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"b","pt":$n[1].Vector3,"ps":1}],"sn":"add","rt":System.Array.type(UnityEngine.Vector3),"p":[System.Array.type(UnityEngine.Vector3),$n[1].Vector3]},{"a":2,"n":"addListener","is":true,"t":8,"pi":[{"n":"eventId","pt":$n[0].Int32,"ps":0},{"n":"callback","pt":Function,"ps":1}],"sn":"addListener","rt":$n[0].Void,"p":[$n[0].Int32,Function]},{"a":2,"n":"addListener","is":true,"t":8,"pi":[{"n":"caller","pt":$n[1].GameObject,"ps":0},{"n":"eventId","pt":$n[0].Int32,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"addListener$1","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Int32,Function]},{"a":2,"n":"alpha","is":true,"t":8,"pi":[{"n":"ltRect","pt":LTRect,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"alpha","rt":LTDescr,"p":[LTRect,$n[0].Single,$n[0].Single]},{"a":2,"n":"alpha","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"alpha$1","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"alpha","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"alpha$2","rt":LTDescr,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"alphaCanvas","is":true,"t":8,"pi":[{"n":"canvasGroup","pt":$n[1].CanvasGroup,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"alphaCanvas","rt":LTDescr,"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"alphaText","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"alphaText","rt":LTDescr,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"alphaVertex","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"alphaVertex","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"cancel","is":true,"t":8,"pi":[{"n":"uniqueId","pt":$n[0].Int32,"ps":0}],"sn":"cancel$1","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"cancel","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0}],"sn":"cancel$3","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"cancel","is":true,"t":8,"pi":[{"n":"rect","pt":$n[1].RectTransform,"ps":0}],"sn":"cancel$6","rt":$n[0].Void,"p":[$n[1].RectTransform]},{"a":2,"n":"cancel","is":true,"t":8,"pi":[{"n":"ltRect","pt":LTRect,"ps":0},{"n":"uniqueId","pt":$n[0].Int32,"ps":1}],"sn":"cancel","rt":$n[0].Void,"p":[LTRect,$n[0].Int32]},{"a":2,"n":"cancel","is":true,"t":8,"pi":[{"n":"uniqueId","pt":$n[0].Int32,"ps":0},{"n":"callOnComplete","pt":$n[0].Boolean,"ps":1}],"sn":"cancel$2","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"cancel","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callOnComplete","pt":$n[0].Boolean,"ps":1},{"n":"matchType","dv":51,"o":true,"pt":TweenAction,"ps":2}],"sn":"cancel$4","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Boolean,TweenAction]},{"a":2,"n":"cancel","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"uniqueId","pt":$n[0].Int32,"ps":1},{"n":"callOnComplete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"cancel$5","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"cancelAll","is":true,"t":8,"sn":"cancelAll","rt":$n[0].Void},{"a":2,"n":"cancelAll","is":true,"t":8,"pi":[{"n":"callComplete","pt":$n[0].Boolean,"ps":0}],"sn":"cancelAll$1","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"clerp","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"clerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"closestRot","is":true,"t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1}],"sn":"closestRot","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"color","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[1].Color,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"color","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Color,$n[0].Single]},{"a":2,"n":"color","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].Color,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"color$1","rt":LTDescr,"p":[$n[1].RectTransform,$n[1].Color,$n[0].Single]},{"a":2,"n":"colorText","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].Color,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"colorText","rt":LTDescr,"p":[$n[1].RectTransform,$n[1].Color,$n[0].Single]},{"a":2,"n":"delayedCall","is":true,"t":8,"pi":[{"n":"delayTime","pt":$n[0].Single,"ps":0},{"n":"callback","pt":Function,"ps":1}],"sn":"delayedCall","rt":LTDescr,"p":[$n[0].Single,Function]},{"a":2,"n":"delayedCall","is":true,"t":8,"pi":[{"n":"delayTime","pt":$n[0].Single,"ps":0},{"n":"callback","pt":Function,"ps":1}],"sn":"delayedCall$1","rt":LTDescr,"p":[$n[0].Single,Function]},{"a":2,"n":"delayedCall","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"delayTime","pt":$n[0].Single,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"delayedCall$2","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,Function]},{"a":2,"n":"delayedCall","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"delayTime","pt":$n[0].Single,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"delayedCall$3","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,Function]},{"a":2,"n":"delayedSound","is":true,"t":8,"pi":[{"n":"audio","pt":$n[1].AudioClip,"ps":0},{"n":"pos","pt":$n[1].Vector3,"ps":1},{"n":"volume","pt":$n[0].Single,"ps":2}],"sn":"delayedSound","rt":LTDescr,"p":[$n[1].AudioClip,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"delayedSound","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"audio","pt":$n[1].AudioClip,"ps":1},{"n":"pos","pt":$n[1].Vector3,"ps":2},{"n":"volume","pt":$n[0].Single,"ps":3}],"sn":"delayedSound$1","rt":LTDescr,"p":[$n[1].GameObject,$n[1].AudioClip,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"descr","is":true,"t":8,"pi":[{"n":"uniqueId","pt":$n[0].Int32,"ps":0}],"sn":"descr","rt":LTDescr,"p":[$n[0].Int32]},{"a":2,"n":"description","is":true,"t":8,"pi":[{"n":"uniqueId","pt":$n[0].Int32,"ps":0}],"sn":"description","rt":LTDescr,"p":[$n[0].Int32]},{"a":2,"n":"descriptions","is":true,"t":8,"pi":[{"n":"gameObject","dv":null,"o":true,"pt":$n[1].GameObject,"ps":0}],"sn":"descriptions","rt":System.Array.type(LTDescr),"p":[$n[1].GameObject]},{"a":2,"n":"destroyAfter","is":true,"t":8,"pi":[{"n":"rect","pt":LTRect,"ps":0},{"n":"delayTime","pt":$n[0].Single,"ps":1}],"sn":"destroyAfter","rt":LTDescr,"p":[LTRect,$n[0].Single]},{"a":2,"n":"dispatchEvent","is":true,"t":8,"pi":[{"n":"eventId","pt":$n[0].Int32,"ps":0}],"sn":"dispatchEvent","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"dispatchEvent","is":true,"t":8,"pi":[{"n":"eventId","pt":$n[0].Int32,"ps":0},{"n":"data","pt":$n[0].Object,"ps":1}],"sn":"dispatchEvent$1","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Object]},{"a":2,"n":"drawBezierPath","is":true,"t":8,"pi":[{"n":"a","pt":$n[1].Vector3,"ps":0},{"n":"b","pt":$n[1].Vector3,"ps":1},{"n":"c","pt":$n[1].Vector3,"ps":2},{"n":"d","pt":$n[1].Vector3,"ps":3},{"n":"arrowSize","dv":0.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"arrowTransform","dv":null,"o":true,"pt":$n[1].Transform,"ps":5}],"sn":"drawBezierPath","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].Vector3,$n[1].Vector3,$n[1].Vector3,$n[0].Single,$n[1].Transform]},{"a":2,"n":"easeInBack","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2},{"n":"overshoot","dv":1.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"easeInBack","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInBounce","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInBounce","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInCirc","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInCirc","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInCubic","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInCubic","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInElastic","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2},{"n":"overshoot","dv":1.0,"o":true,"pt":$n[0].Single,"ps":3},{"n":"period","dv":0.3,"o":true,"pt":$n[0].Single,"ps":4}],"sn":"easeInElastic","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInExpo","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInExpo","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutBack","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2},{"n":"overshoot","dv":1.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"easeInOutBack","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutBounce","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInOutBounce","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutCirc","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInOutCirc","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutCubic","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInOutCubic","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutElastic","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2},{"n":"overshoot","dv":1.0,"o":true,"pt":$n[0].Single,"ps":3},{"n":"period","dv":0.3,"o":true,"pt":$n[0].Single,"ps":4}],"sn":"easeInOutElastic","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutExpo","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInOutExpo","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutQuad","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInOutQuad","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutQuadOpt","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"diff","pt":$n[0].Single,"ps":1},{"n":"ratioPassed","pt":$n[0].Single,"ps":2}],"sn":"easeInOutQuadOpt","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutQuadOpt","is":true,"t":8,"pi":[{"n":"start","pt":$n[1].Vector3,"ps":0},{"n":"diff","pt":$n[1].Vector3,"ps":1},{"n":"ratioPassed","pt":$n[0].Single,"ps":2}],"sn":"easeInOutQuadOpt$1","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"easeInOutQuadOpt2","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"diffBy2","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2},{"n":"val2","pt":$n[0].Single,"ps":3}],"sn":"easeInOutQuadOpt2","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutQuart","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInOutQuart","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutQuint","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInOutQuint","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutSine","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInOutSine","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInQuad","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInQuad","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInQuadOpt","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"diff","pt":$n[0].Single,"ps":1},{"n":"ratioPassed","pt":$n[0].Single,"ps":2}],"sn":"easeInQuadOpt","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInQuart","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInQuart","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInQuint","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInQuint","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInSine","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInSine","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutBack","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2},{"n":"overshoot","dv":1.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"easeOutBack","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutBounce","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeOutBounce","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutCirc","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeOutCirc","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutCubic","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeOutCubic","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutElastic","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2},{"n":"overshoot","dv":1.0,"o":true,"pt":$n[0].Single,"ps":3},{"n":"period","dv":0.3,"o":true,"pt":$n[0].Single,"ps":4}],"sn":"easeOutElastic","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutExpo","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeOutExpo","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutQuad","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeOutQuad","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutQuadOpt","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"diff","pt":$n[0].Single,"ps":1},{"n":"ratioPassed","pt":$n[0].Single,"ps":2}],"sn":"easeOutQuadOpt","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutQuart","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeOutQuart","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutQuint","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeOutQuint","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutSine","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeOutSine","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"followBounceOut","is":true,"t":8,"pi":[{"n":"trans","pt":$n[1].Transform,"ps":0},{"n":"target","pt":$n[1].Transform,"ps":1},{"n":"prop","pt":LeanProp,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"friction","dv":2.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"accelRate","dv":0.5,"o":true,"pt":$n[0].Single,"ps":6},{"n":"hitDamping","dv":0.9,"o":true,"pt":$n[0].Single,"ps":7}],"sn":"followBounceOut","rt":LTDescr,"p":[$n[1].Transform,$n[1].Transform,LeanProp,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"followDamp","is":true,"t":8,"pi":[{"n":"trans","pt":$n[1].Transform,"ps":0},{"n":"target","pt":$n[1].Transform,"ps":1},{"n":"prop","pt":LeanProp,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4}],"sn":"followDamp","rt":LTDescr,"p":[$n[1].Transform,$n[1].Transform,LeanProp,$n[0].Single,$n[0].Single]},{"a":2,"n":"followLinear","is":true,"t":8,"pi":[{"n":"trans","pt":$n[1].Transform,"ps":0},{"n":"target","pt":$n[1].Transform,"ps":1},{"n":"prop","pt":LeanProp,"ps":2},{"n":"moveSpeed","pt":$n[0].Single,"ps":3}],"sn":"followLinear","rt":LTDescr,"p":[$n[1].Transform,$n[1].Transform,LeanProp,$n[0].Single]},{"a":2,"n":"followSpring","is":true,"t":8,"pi":[{"n":"trans","pt":$n[1].Transform,"ps":0},{"n":"target","pt":$n[1].Transform,"ps":1},{"n":"prop","pt":LeanProp,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"friction","dv":2.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"accelRate","dv":0.5,"o":true,"pt":$n[0].Single,"ps":6}],"sn":"followSpring","rt":LTDescr,"p":[$n[1].Transform,$n[1].Transform,LeanProp,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"init","is":true,"t":8,"sn":"init","rt":$n[0].Void},{"a":2,"n":"init","is":true,"t":8,"pi":[{"n":"maxSimultaneousTweens","pt":$n[0].Int32,"ps":0}],"sn":"init$1","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"init","is":true,"t":8,"pi":[{"n":"maxSimultaneousTweens","pt":$n[0].Int32,"ps":0},{"n":"maxSimultaneousSequences","pt":$n[0].Int32,"ps":1}],"sn":"init$2","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":1,"n":"internalOnLevelWasLoaded","is":true,"t":8,"pi":[{"n":"lvl","pt":$n[0].Int32,"ps":0}],"sn":"internalOnLevelWasLoaded","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"isPaused","is":true,"t":8,"pi":[{"n":"uniqueId","pt":$n[0].Int32,"ps":0}],"sn":"isPaused","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isPaused","is":true,"t":8,"pi":[{"n":"gameObject","dv":null,"o":true,"pt":$n[1].GameObject,"ps":0}],"sn":"isPaused$1","rt":$n[0].Boolean,"p":[$n[1].GameObject],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isPaused","is":true,"t":8,"pi":[{"n":"rect","pt":$n[1].RectTransform,"ps":0}],"sn":"isPaused$2","rt":$n[0].Boolean,"p":[$n[1].RectTransform],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isTweening","is":true,"t":8,"pi":[{"n":"ltRect","pt":LTRect,"ps":0}],"sn":"isTweening","rt":$n[0].Boolean,"p":[LTRect],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isTweening","is":true,"t":8,"pi":[{"n":"uniqueId","pt":$n[0].Int32,"ps":0}],"sn":"isTweening$1","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isTweening","is":true,"t":8,"pi":[{"n":"gameObject","dv":null,"o":true,"pt":$n[1].GameObject,"ps":0}],"sn":"isTweening$2","rt":$n[0].Boolean,"p":[$n[1].GameObject],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isTweening","is":true,"t":8,"pi":[{"n":"rect","pt":$n[1].RectTransform,"ps":0}],"sn":"isTweening$3","rt":$n[0].Boolean,"p":[$n[1].RectTransform],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"linear","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"linear","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"logError","is":true,"t":8,"pi":[{"n":"error","pt":$n[0].String,"ps":0}],"sn":"logError","rt":$n[0].Object,"p":[$n[0].String]},{"a":2,"n":"move","is":true,"t":8,"pi":[{"n":"ltRect","pt":LTRect,"ps":0},{"n":"to","pt":$n[1].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"move","rt":LTDescr,"p":[LTRect,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"move","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":LTBezierPath,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"move$1","rt":LTDescr,"p":[$n[1].GameObject,LTBezierPath,$n[0].Single]},{"a":2,"n":"move","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"move$2","rt":LTDescr,"p":[$n[1].GameObject,LTSpline,$n[0].Single]},{"a":2,"n":"move","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[1].Transform,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"move$3","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Transform,$n[0].Single]},{"a":2,"n":"move","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[1].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"move$4","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"move","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"move$5","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"move","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"move$6","rt":LTDescr,"p":[$n[1].GameObject,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"move","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"move$7","rt":LTDescr,"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"moveLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":LTBezierPath,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveLocal","rt":LTDescr,"p":[$n[1].GameObject,LTBezierPath,$n[0].Single]},{"a":2,"n":"moveLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveLocal$1","rt":LTDescr,"p":[$n[1].GameObject,LTSpline,$n[0].Single]},{"a":2,"n":"moveLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveLocal$2","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"moveLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveLocal$3","rt":LTDescr,"p":[$n[1].GameObject,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"moveLocalX","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveLocalX","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"moveLocalY","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveLocalY","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"moveLocalZ","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveLocalZ","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"moveMargin","is":true,"t":8,"pi":[{"n":"ltRect","pt":LTRect,"ps":0},{"n":"to","pt":$n[1].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveMargin","rt":LTDescr,"p":[LTRect,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"moveSpline","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveSpline","rt":LTDescr,"p":[$n[1].GameObject,LTSpline,$n[0].Single]},{"a":2,"n":"moveSpline","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveSpline$1","rt":LTDescr,"p":[$n[1].GameObject,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"moveSplineLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveSplineLocal","rt":LTDescr,"p":[$n[1].GameObject,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"moveX","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveX","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"moveX","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveX$1","rt":LTDescr,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"moveY","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveY","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"moveY","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveY$1","rt":LTDescr,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"moveZ","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveZ","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"moveZ","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveZ$1","rt":LTDescr,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":1,"n":"onLevelWasLoaded54","is":true,"t":8,"pi":[{"n":"scene","pt":LunaUnity.Objects.Scene,"ps":0},{"n":"mode","pt":$n[2].LoadSceneMode,"ps":1}],"sn":"onLevelWasLoaded54","rt":$n[0].Void,"p":[LunaUnity.Objects.Scene,$n[2].LoadSceneMode]},{"a":2,"n":"options","is":true,"t":8,"sn":"options","rt":LTDescr},{"a":2,"n":"options","is":true,"t":8,"pi":[{"n":"seed","pt":LTDescr,"ps":0}],"sn":"options$1","rt":LTDescr,"p":[LTDescr]},{"a":2,"n":"pause","is":true,"t":8,"pi":[{"n":"uniqueId","pt":$n[0].Int32,"ps":0}],"sn":"pause","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"pause","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0}],"sn":"pause$1","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"pause","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"uniqueId","pt":$n[0].Int32,"ps":1}],"sn":"pause$2","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Int32]},{"a":2,"n":"pauseAll","is":true,"t":8,"sn":"pauseAll","rt":$n[0].Void},{"a":2,"n":"play","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"sprites","pt":System.Array.type(UnityEngine.Sprite),"ps":1}],"sn":"play","rt":LTDescr,"p":[$n[1].RectTransform,System.Array.type(UnityEngine.Sprite)]},{"a":1,"n":"pushNewTween","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2},{"n":"tween","pt":LTDescr,"ps":3}],"sn":"pushNewTween","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector3,$n[0].Single,LTDescr]},{"a":2,"n":"removeListener","is":true,"t":8,"pi":[{"n":"eventId","pt":$n[0].Int32,"ps":0}],"sn":"removeListener","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"removeListener","is":true,"t":8,"pi":[{"n":"eventId","pt":$n[0].Int32,"ps":0},{"n":"callback","pt":Function,"ps":1}],"sn":"removeListener$1","rt":$n[0].Boolean,"p":[$n[0].Int32,Function],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"removeListener","is":true,"t":8,"pi":[{"n":"caller","pt":$n[1].GameObject,"ps":0},{"n":"eventId","pt":$n[0].Int32,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"removeListener$2","rt":$n[0].Boolean,"p":[$n[1].GameObject,$n[0].Int32,Function],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"removeTween","is":true,"t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0},{"n":"shouldReset","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"removeTween","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"removeTween","is":true,"t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0},{"n":"uniqueId","pt":$n[0].Int32,"ps":1}],"sn":"removeTween$1","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"reset","is":true,"t":8,"sn":"reset","rt":$n[0].Void},{"a":2,"n":"resume","is":true,"t":8,"pi":[{"n":"uniqueId","pt":$n[0].Int32,"ps":0}],"sn":"resume","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"resume","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0}],"sn":"resume$1","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"resume","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"uniqueId","pt":$n[0].Int32,"ps":1}],"sn":"resume$2","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Int32]},{"a":2,"n":"resumeAll","is":true,"t":8,"sn":"resumeAll","rt":$n[0].Void},{"a":2,"n":"rotate","is":true,"t":8,"pi":[{"n":"ltRect","pt":LTRect,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"rotate","rt":LTDescr,"p":[LTRect,$n[0].Single,$n[0].Single]},{"a":2,"n":"rotate","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"rotate$1","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"rotate","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"rotate$2","rt":LTDescr,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"rotate","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"rotate$3","rt":LTDescr,"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"rotateAround","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"axis","pt":$n[1].Vector3,"ps":1},{"n":"add","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"rotateAround","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"rotateAround","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[1].RectTransform,"ps":0},{"n":"axis","pt":$n[1].Vector3,"ps":1},{"n":"to","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"rotateAround$1","rt":LTDescr,"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"rotateAroundLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"axis","pt":$n[1].Vector3,"ps":1},{"n":"add","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"rotateAroundLocal","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"rotateAroundLocal","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[1].RectTransform,"ps":0},{"n":"axis","pt":$n[1].Vector3,"ps":1},{"n":"to","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"rotateAroundLocal$1","rt":LTDescr,"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"rotateLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"rotateLocal","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"rotateX","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"rotateX","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"rotateY","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"rotateY","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"rotateZ","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"rotateZ","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"scale","is":true,"t":8,"pi":[{"n":"ltRect","pt":LTRect,"ps":0},{"n":"to","pt":$n[1].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"scale","rt":LTDescr,"p":[LTRect,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"scale","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"scale$1","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"scale","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"scale$2","rt":LTDescr,"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"scaleX","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"scaleX","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"scaleY","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"scaleY","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"scaleZ","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"scaleZ","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"sequence","is":true,"t":8,"pi":[{"n":"initSequence","dv":true,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"sequence","rt":LTSeq,"p":[$n[0].Boolean]},{"a":2,"n":"size","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"size","rt":LTDescr,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"spring","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"spring","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"textAlpha","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"textAlpha","rt":LTDescr,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"textColor","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].Color,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"textColor","rt":LTDescr,"p":[$n[1].RectTransform,$n[1].Color,$n[0].Single]},{"a":2,"n":"tweenOnCurve","is":true,"t":8,"pi":[{"n":"tweenDescr","pt":LTDescr,"ps":0},{"n":"ratioPassed","pt":$n[0].Single,"ps":1}],"sn":"tweenOnCurve","rt":$n[0].Single,"p":[LTDescr,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"tweenOnCurveVector","is":true,"t":8,"pi":[{"n":"tweenDescr","pt":LTDescr,"ps":0},{"n":"ratioPassed","pt":$n[0].Single,"ps":1}],"sn":"tweenOnCurveVector","rt":$n[1].Vector3,"p":[LTDescr,$n[0].Single]},{"a":2,"n":"update","is":true,"t":8,"sn":"update","rt":$n[0].Void},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"value","rt":LTDescr,"p":[$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"from","pt":$n[0].Single,"ps":1},{"n":"to","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"value$8","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"from","pt":$n[1].Color,"ps":1},{"n":"to","pt":$n[1].Color,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"value$9","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Color,$n[1].Color,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"from","pt":$n[1].Vector2,"ps":1},{"n":"to","pt":$n[1].Vector2,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"value$10","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector2,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"from","pt":$n[1].Vector3,"ps":1},{"n":"to","pt":$n[1].Vector3,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"value$11","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector3,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[0].Single,"ps":2},{"n":"to","pt":$n[0].Single,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"value$1","rt":LTDescr,"p":[$n[1].GameObject,Function,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callOnUpdateRatio","pt":Function,"ps":1},{"n":"from","pt":$n[0].Single,"ps":2},{"n":"to","pt":$n[0].Single,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"value$6","rt":LTDescr,"p":[$n[1].GameObject,Function,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[0].Single,"ps":2},{"n":"to","pt":$n[0].Single,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"value$5","rt":LTDescr,"p":[$n[1].GameObject,Function,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[1].Color,"ps":2},{"n":"to","pt":$n[1].Color,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"value$2","rt":LTDescr,"p":[$n[1].GameObject,Function,$n[1].Color,$n[1].Color,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[1].Color,"ps":2},{"n":"to","pt":$n[1].Color,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"value$7","rt":LTDescr,"p":[$n[1].GameObject,Function,$n[1].Color,$n[1].Color,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[1].Vector2,"ps":2},{"n":"to","pt":$n[1].Vector2,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"value$3","rt":LTDescr,"p":[$n[1].GameObject,Function,$n[1].Vector2,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[1].Vector3,"ps":2},{"n":"to","pt":$n[1].Vector3,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"value$4","rt":LTDescr,"p":[$n[1].GameObject,Function,$n[1].Vector3,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"maxSearch","is":true,"t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_maxSearch","t":8,"rt":$n[0].Int32,"fg":"maxSearch","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"maxSearch"},{"a":2,"n":"maxSimulataneousTweens","is":true,"t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_maxSimulataneousTweens","t":8,"rt":$n[0].Int32,"fg":"maxSimulataneousTweens","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"maxSimulataneousTweens"},{"a":2,"n":"tweenEmpty","is":true,"t":16,"rt":$n[1].GameObject,"g":{"a":2,"n":"get_tweenEmpty","t":8,"rt":$n[1].GameObject,"fg":"tweenEmpty","is":true},"fn":"tweenEmpty"},{"a":2,"n":"tweensRunning","is":true,"t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_tweensRunning","t":8,"rt":$n[0].Int32,"fg":"tweensRunning","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"tweensRunning"},{"a":2,"n":"EVENTS_MAX","is":true,"t":4,"rt":$n[0].Int32,"sn":"EVENTS_MAX","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"INIT_LISTENERS_MAX","is":true,"t":4,"rt":$n[0].Int32,"sn":"INIT_LISTENERS_MAX","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"LISTENERS_MAX","is":true,"t":4,"rt":$n[0].Int32,"sn":"LISTENERS_MAX","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"PI_DIV2","is":true,"t":4,"rt":$n[0].Single,"sn":"PI_DIV2","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_tweenEmpty","is":true,"t":4,"rt":$n[1].GameObject,"sn":"_tweenEmpty"},{"a":2,"n":"d","is":true,"t":4,"rt":LTDescr,"sn":"d"},{"a":2,"n":"dtActual","is":true,"t":4,"rt":$n[0].Single,"sn":"dtActual","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"dtEstimated","is":true,"t":4,"rt":$n[0].Single,"sn":"dtEstimated","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"dtManual","is":true,"t":4,"rt":$n[0].Single,"sn":"dtManual","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"eventListeners","is":true,"t":4,"rt":$n[0].Array.type(Function),"sn":"eventListeners"},{"a":1,"n":"eventsMaxSearch","is":true,"t":4,"rt":$n[0].Int32,"sn":"eventsMaxSearch","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"finishedCnt","is":true,"t":4,"rt":$n[0].Int32,"sn":"finishedCnt","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"frameRendered","is":true,"t":4,"rt":$n[0].Int32,"sn":"frameRendered","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"global_counter","is":true,"t":4,"rt":$n[0].UInt32,"sn":"global_counter","box":function ($v) { return Bridge.box($v, System.UInt32);}},{"a":1,"n":"goListeners","is":true,"t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"goListeners"},{"a":1,"n":"i","is":true,"t":4,"rt":$n[0].Int32,"sn":"i","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"j","is":true,"t":4,"rt":$n[0].Int32,"sn":"j","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"maxSequences","is":true,"t":4,"rt":$n[0].Int32,"sn":"maxSequences","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"maxTweenReached","is":true,"t":4,"rt":$n[0].Int32,"sn":"maxTweenReached","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"maxTweens","is":true,"t":4,"rt":$n[0].Int32,"sn":"maxTweens","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"punch","is":true,"t":4,"rt":pc.AnimationCurve,"sn":"punch"},{"a":1,"n":"sequences","is":true,"t":4,"rt":System.Array.type(LTSeq),"sn":"sequences"},{"a":2,"n":"shake","is":true,"t":4,"rt":pc.AnimationCurve,"sn":"shake"},{"a":2,"n":"startSearch","is":true,"t":4,"rt":$n[0].Int32,"sn":"startSearch","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"tau","is":true,"t":4,"rt":$n[0].Single,"sn":"tau","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"throwErrors","is":true,"t":4,"rt":$n[0].Boolean,"sn":"throwErrors","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"tween","is":true,"t":4,"rt":LTDescr,"sn":"tween"},{"a":1,"n":"tweenMaxSearch","is":true,"t":4,"rt":$n[0].Int32,"sn":"tweenMaxSearch","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"tweens","is":true,"t":4,"rt":System.Array.type(LTDescr),"sn":"tweens"},{"a":1,"n":"tweensFinished","is":true,"t":4,"rt":$n[0].Array.type(System.Int32),"sn":"tweensFinished"},{"a":1,"n":"tweensFinishedIds","is":true,"t":4,"rt":$n[0].Array.type(System.Int32),"sn":"tweensFinishedIds"}]}; }, $n);
    /*LeanTween end.*/

    /*LTUtility start.*/
    $m("LTUtility", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"reverse","is":true,"t":8,"pi":[{"n":"arr","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"reverse","rt":System.Array.type(UnityEngine.Vector3),"p":[System.Array.type(UnityEngine.Vector3)]}]}; }, $n);
    /*LTUtility end.*/

    /*LTBezier start.*/
    $m("LTBezier", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].Vector3,$n[1].Vector3,$n[1].Vector3,$n[1].Vector3,$n[0].Single],"pi":[{"n":"a","pt":$n[1].Vector3,"ps":0},{"n":"b","pt":$n[1].Vector3,"ps":1},{"n":"c","pt":$n[1].Vector3,"ps":2},{"n":"d","pt":$n[1].Vector3,"ps":3},{"n":"precision","pt":$n[0].Single,"ps":4}],"sn":"ctor"},{"a":1,"n":"bezierPoint","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0}],"sn":"bezierPoint","rt":$n[1].Vector3,"p":[$n[0].Single]},{"a":1,"n":"map","t":8,"pi":[{"n":"u","pt":$n[0].Single,"ps":0}],"sn":"map","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"point","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0}],"sn":"point","rt":$n[1].Vector3,"p":[$n[0].Single]},{"a":1,"n":"a","t":4,"rt":$n[1].Vector3,"sn":"a"},{"a":1,"n":"aa","t":4,"rt":$n[1].Vector3,"sn":"aa"},{"a":1,"n":"arcLengths","t":4,"rt":$n[0].Array.type(System.Single),"sn":"arcLengths"},{"a":1,"n":"bb","t":4,"rt":$n[1].Vector3,"sn":"bb"},{"a":1,"n":"cc","t":4,"rt":$n[1].Vector3,"sn":"cc"},{"a":1,"n":"len","t":4,"rt":$n[0].Single,"sn":"len","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"length","t":4,"rt":$n[0].Single,"sn":"length","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LTBezier end.*/

    /*LTBezierPath start.*/
    $m("LTBezierPath", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[System.Array.type(UnityEngine.Vector3)],"pi":[{"n":"pts_","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"$ctor1"},{"a":2,"n":"gizmoDraw","t":8,"pi":[{"n":"t","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":0}],"sn":"gizmoDraw","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"place","t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1}],"sn":"place","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single]},{"a":2,"n":"place","t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1},{"n":"worldUp","pt":$n[1].Vector3,"ps":2}],"sn":"place$1","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single,$n[1].Vector3]},{"a":2,"n":"place2d","t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1}],"sn":"place2d","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single]},{"a":2,"n":"placeLocal","t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1}],"sn":"placeLocal","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single]},{"a":2,"n":"placeLocal","t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1},{"n":"worldUp","pt":$n[1].Vector3,"ps":2}],"sn":"placeLocal$1","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single,$n[1].Vector3]},{"a":2,"n":"placeLocal2d","t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1}],"sn":"placeLocal2d","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single]},{"a":2,"n":"point","t":8,"pi":[{"n":"ratio","pt":$n[0].Single,"ps":0}],"sn":"point","rt":$n[1].Vector3,"p":[$n[0].Single]},{"a":2,"n":"ratioAtPoint","t":8,"pi":[{"n":"pt","pt":$n[1].Vector3,"ps":0},{"n":"precision","dv":0.01,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"ratioAtPoint","rt":$n[0].Single,"p":[$n[1].Vector3,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"setPoints","t":8,"pi":[{"n":"pts_","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"setPoints","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Vector3)]},{"a":2,"n":"distance","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_distance","t":8,"rt":$n[0].Single,"fg":"distance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"distance"},{"a":1,"n":"beziers","t":4,"rt":System.Array.type(LTBezier),"sn":"beziers"},{"a":1,"n":"currentBezier","t":4,"rt":$n[0].Int32,"sn":"currentBezier","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"length","t":4,"rt":$n[0].Single,"sn":"length","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"lengthRatio","t":4,"rt":$n[0].Array.type(System.Single),"sn":"lengthRatio"},{"a":2,"n":"orientToPath","t":4,"rt":$n[0].Boolean,"sn":"orientToPath","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"orientToPath2d","t":4,"rt":$n[0].Boolean,"sn":"orientToPath2d","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"previousBezier","t":4,"rt":$n[0].Int32,"sn":"previousBezier","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"pts","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"pts"}]}; }, $n);
    /*LTBezierPath end.*/

    /*LTSpline start.*/
    $m("LTSpline", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"p":[System.Array.type(UnityEngine.Vector3)],"pi":[{"n":"pts","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[System.Array.type(UnityEngine.Vector3),$n[0].Boolean],"pi":[{"n":"pts","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"constantSpeed","pt":$n[0].Boolean,"ps":1}],"sn":"$ctor1"},{"a":2,"n":"drawGizmo","t":8,"pi":[{"n":"color","pt":$n[1].Color,"ps":0}],"sn":"drawGizmo","rt":$n[0].Void,"p":[$n[1].Color]},{"a":2,"n":"drawGizmo","is":true,"t":8,"pi":[{"n":"arr","pt":System.Array.type(UnityEngine.Transform),"ps":0},{"n":"color","pt":$n[1].Color,"ps":1}],"sn":"drawGizmo","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Transform),$n[1].Color]},{"a":2,"n":"drawLine","is":true,"t":8,"pi":[{"n":"arr","pt":System.Array.type(UnityEngine.Transform),"ps":0},{"n":"width","pt":$n[0].Single,"ps":1},{"n":"color","pt":$n[1].Color,"ps":2}],"sn":"drawLine","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Transform),$n[0].Single,$n[1].Color]},{"a":2,"n":"generateVectors","t":8,"sn":"generateVectors","rt":System.Array.type(UnityEngine.Vector3)},{"a":2,"n":"gizmoDraw","t":8,"pi":[{"n":"t","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":0}],"sn":"gizmoDraw","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"init","t":8,"pi":[{"n":"pts","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"constantSpeed","pt":$n[0].Boolean,"ps":1}],"sn":"init","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Vector3),$n[0].Boolean]},{"a":2,"n":"interp","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0}],"sn":"interp","rt":$n[1].Vector3,"p":[$n[0].Single]},{"a":2,"n":"map","t":8,"pi":[{"n":"u","pt":$n[0].Single,"ps":0}],"sn":"map","rt":$n[1].Vector3,"p":[$n[0].Single]},{"a":2,"n":"place","t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1}],"sn":"place","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single]},{"a":2,"n":"place","t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1},{"n":"worldUp","pt":$n[1].Vector3,"ps":2}],"sn":"place$1","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single,$n[1].Vector3]},{"a":2,"n":"place2d","t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1}],"sn":"place2d","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single]},{"a":2,"n":"placeLocal","t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1}],"sn":"placeLocal","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single]},{"a":2,"n":"placeLocal","t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1},{"n":"worldUp","pt":$n[1].Vector3,"ps":2}],"sn":"placeLocal$1","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single,$n[1].Vector3]},{"a":2,"n":"placeLocal2d","t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1}],"sn":"placeLocal2d","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single]},{"a":2,"n":"point","t":8,"pi":[{"n":"ratio","pt":$n[0].Single,"ps":0}],"sn":"point","rt":$n[1].Vector3,"p":[$n[0].Single]},{"a":2,"n":"ratioAtPoint","t":8,"pi":[{"n":"pt","pt":$n[1].Vector3,"ps":0}],"sn":"ratioAtPoint","rt":$n[0].Single,"p":[$n[1].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"DISTANCE_COUNT","is":true,"t":4,"rt":$n[0].Int32,"sn":"DISTANCE_COUNT","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"SUBLINE_COUNT","is":true,"t":4,"rt":$n[0].Int32,"sn":"SUBLINE_COUNT","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"constantSpeed","t":4,"rt":$n[0].Boolean,"sn":"constantSpeed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"currPt","t":4,"rt":$n[0].Int32,"sn":"currPt","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"distance","t":4,"rt":$n[0].Single,"sn":"distance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"numSections","t":4,"rt":$n[0].Int32,"sn":"numSections","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"orientToPath","t":4,"rt":$n[0].Boolean,"sn":"orientToPath","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"orientToPath2d","t":4,"rt":$n[0].Boolean,"sn":"orientToPath2d","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"pts","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"pts"},{"a":2,"n":"ptsAdj","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"ptsAdj"},{"a":2,"n":"ptsAdjLength","t":4,"rt":$n[0].Int32,"sn":"ptsAdjLength","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*LTSpline end.*/

    /*LTRect start.*/
    $m("LTRect", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[1].Rect],"pi":[{"n":"rect","pt":$n[1].Rect,"ps":0}],"sn":"$ctor4"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"pi":[{"n":"x","pt":$n[0].Single,"ps":0},{"n":"y","pt":$n[0].Single,"ps":1},{"n":"width","pt":$n[0].Single,"ps":2},{"n":"height","pt":$n[0].Single,"ps":3}],"sn":"$ctor1"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"pi":[{"n":"x","pt":$n[0].Single,"ps":0},{"n":"y","pt":$n[0].Single,"ps":1},{"n":"width","pt":$n[0].Single,"ps":2},{"n":"height","pt":$n[0].Single,"ps":3},{"n":"alpha","pt":$n[0].Single,"ps":4}],"sn":"$ctor2"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"pi":[{"n":"x","pt":$n[0].Single,"ps":0},{"n":"y","pt":$n[0].Single,"ps":1},{"n":"width","pt":$n[0].Single,"ps":2},{"n":"height","pt":$n[0].Single,"ps":3},{"n":"alpha","pt":$n[0].Single,"ps":4},{"n":"rotation","pt":$n[0].Single,"ps":5}],"sn":"$ctor3"},{"ov":true,"a":2,"n":"ToString","t":8,"sn":"toString","rt":$n[0].String},{"a":2,"n":"reset","t":8,"sn":"reset","rt":$n[0].Void},{"a":2,"n":"resetForRotation","t":8,"sn":"resetForRotation","rt":$n[0].Void},{"a":2,"n":"setAlpha","t":8,"pi":[{"n":"alpha","pt":$n[0].Single,"ps":0}],"sn":"setAlpha","rt":LTRect,"p":[$n[0].Single]},{"a":2,"n":"setColor","t":8,"pi":[{"n":"color","pt":$n[1].Color,"ps":0}],"sn":"setColor","rt":LTRect,"p":[$n[1].Color]},{"a":2,"n":"setFontScaleToFit","t":8,"pi":[{"n":"fontScaleToFit","pt":$n[0].Boolean,"ps":0}],"sn":"setFontScaleToFit","rt":LTRect,"p":[$n[0].Boolean]},{"a":2,"n":"setId","t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0},{"n":"counter","pt":$n[0].Int32,"ps":1}],"sn":"setId","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"setLabel","t":8,"pi":[{"n":"str","pt":$n[0].String,"ps":0}],"sn":"setLabel","rt":LTRect,"p":[$n[0].String]},{"a":2,"n":"setSizeByHeight","t":8,"pi":[{"n":"sizeByHeight","pt":$n[0].Boolean,"ps":0}],"sn":"setSizeByHeight","rt":LTRect,"p":[$n[0].Boolean]},{"a":2,"n":"setStyle","t":8,"pi":[{"n":"style","pt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.GUIStyle' ) ),"ps":0}],"sn":"setStyle","rt":LTRect,"p":[( pc.stubProxy.generateConstructorFor( 'UnityEngine.GUIStyle' ) )]},{"a":2,"n":"setUseSimpleScale","t":8,"pi":[{"n":"useSimpleScale","pt":$n[0].Boolean,"ps":0}],"sn":"setUseSimpleScale","rt":LTRect,"p":[$n[0].Boolean]},{"a":2,"n":"setUseSimpleScale","t":8,"pi":[{"n":"useSimpleScale","pt":$n[0].Boolean,"ps":0},{"n":"relativeRect","pt":$n[1].Rect,"ps":1}],"sn":"setUseSimpleScale$1","rt":LTRect,"p":[$n[0].Boolean,$n[1].Rect]},{"a":2,"n":"hasInitiliazed","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_hasInitiliazed","t":8,"rt":$n[0].Boolean,"fg":"hasInitiliazed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"hasInitiliazed"},{"a":2,"n":"height","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_height","t":8,"rt":$n[0].Single,"fg":"height","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_height","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"height"},"fn":"height"},{"a":2,"n":"id","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_id","t":8,"rt":$n[0].Int32,"fg":"id","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"id"},{"a":2,"n":"rect","t":16,"rt":$n[1].Rect,"g":{"a":2,"n":"get_rect","t":8,"rt":$n[1].Rect,"fg":"rect"},"s":{"a":2,"n":"set_rect","t":8,"p":[$n[1].Rect],"rt":$n[0].Void,"fs":"rect"},"fn":"rect"},{"a":2,"n":"width","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_width","t":8,"rt":$n[0].Single,"fg":"width","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_width","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"width"},"fn":"width"},{"a":2,"n":"x","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_x","t":8,"rt":$n[0].Single,"fg":"x","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_x","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"x"},"fn":"x"},{"a":2,"n":"y","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_y","t":8,"rt":$n[0].Single,"fg":"y","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_y","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"y"},"fn":"y"},{"a":1,"n":"_id","t":4,"rt":$n[0].Int32,"sn":"_id","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"_rect","t":4,"rt":$n[1].Rect,"sn":"_rect"},{"a":2,"n":"alpha","t":4,"rt":$n[0].Single,"sn":"alpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"alphaEnabled","t":4,"rt":$n[0].Boolean,"sn":"alphaEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"color","t":4,"rt":$n[1].Color,"sn":"color"},{"a":2,"n":"colorTouched","is":true,"t":4,"rt":$n[0].Boolean,"sn":"colorTouched","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"counter","t":4,"rt":$n[0].Int32,"sn":"counter","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"fontScaleToFit","t":4,"rt":$n[0].Boolean,"sn":"fontScaleToFit","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"labelStr","t":4,"rt":$n[0].String,"sn":"labelStr"},{"a":2,"n":"margin","t":4,"rt":$n[1].Vector2,"sn":"margin"},{"a":2,"n":"pivot","t":4,"rt":$n[1].Vector2,"sn":"pivot"},{"a":2,"n":"relativeRect","t":4,"rt":$n[1].Rect,"sn":"relativeRect"},{"a":2,"n":"rotateEnabled","t":4,"rt":$n[0].Boolean,"sn":"rotateEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"rotateFinished","t":4,"rt":$n[0].Boolean,"sn":"rotateFinished","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"rotation","t":4,"rt":$n[0].Single,"sn":"rotation","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"sizeByHeight","t":4,"rt":$n[0].Boolean,"sn":"sizeByHeight","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"style","t":4,"rt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.GUIStyle' ) ),"sn":"style"},{"a":2,"n":"texture","t":4,"rt":$n[1].Texture,"sn":"texture"},{"a":2,"n":"type","t":4,"rt":LTGUI.Element_Type,"sn":"type","box":function ($v) { return Bridge.box($v, LTGUI.Element_Type, System.Enum.toStringFn(LTGUI.Element_Type));}},{"a":2,"n":"useColor","t":4,"rt":$n[0].Boolean,"sn":"useColor","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useSimpleScale","t":4,"rt":$n[0].Boolean,"sn":"useSimpleScale","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*LTRect end.*/

    /*LTEvent start.*/
    $m("LTEvent", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32,$n[0].Object],"pi":[{"n":"id","pt":$n[0].Int32,"ps":0},{"n":"data","pt":$n[0].Object,"ps":1}],"sn":"ctor"},{"a":2,"n":"data","t":4,"rt":$n[0].Object,"sn":"data"},{"a":2,"n":"id","t":4,"rt":$n[0].Int32,"sn":"id","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*LTEvent end.*/

    /*LTGUI start.*/
    $m("LTGUI", function () { return {"nested":[LTGUI.Element_Type],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"checkOnScreen","is":true,"t":8,"pi":[{"n":"rect","pt":$n[1].Rect,"ps":0}],"sn":"checkOnScreen","rt":$n[0].Boolean,"p":[$n[1].Rect],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"checkWithinRect","is":true,"t":8,"pi":[{"n":"vec2","pt":$n[1].Vector2,"ps":0},{"n":"rect","pt":$n[1].Rect,"ps":1}],"sn":"checkWithinRect","rt":$n[0].Boolean,"p":[$n[1].Vector2,$n[1].Rect],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"destroy","is":true,"t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0}],"sn":"destroy","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"destroyAll","is":true,"t":8,"pi":[{"n":"depth","pt":$n[0].Int32,"ps":0}],"sn":"destroyAll","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"element","is":true,"t":8,"pi":[{"n":"rect","pt":LTRect,"ps":0},{"n":"depth","pt":$n[0].Int32,"ps":1}],"sn":"element","rt":LTRect,"p":[LTRect,$n[0].Int32]},{"a":2,"n":"firstTouch","is":true,"t":8,"sn":"firstTouch","rt":$n[1].Vector2},{"a":2,"n":"hasNoOverlap","is":true,"t":8,"pi":[{"n":"rect","pt":$n[1].Rect,"ps":0},{"n":"depth","pt":$n[0].Int32,"ps":1}],"sn":"hasNoOverlap","rt":$n[0].Boolean,"p":[$n[1].Rect,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"init","is":true,"t":8,"sn":"init","rt":$n[0].Void},{"a":2,"n":"initRectCheck","is":true,"t":8,"sn":"initRectCheck","rt":$n[0].Void},{"a":2,"n":"label","is":true,"t":8,"pi":[{"n":"rect","pt":LTRect,"ps":0},{"n":"label","pt":$n[0].String,"ps":1},{"n":"depth","pt":$n[0].Int32,"ps":2}],"sn":"label","rt":LTRect,"p":[LTRect,$n[0].String,$n[0].Int32]},{"a":2,"n":"label","is":true,"t":8,"pi":[{"n":"rect","pt":$n[1].Rect,"ps":0},{"n":"label","pt":$n[0].String,"ps":1},{"n":"depth","pt":$n[0].Int32,"ps":2}],"sn":"label$1","rt":LTRect,"p":[$n[1].Rect,$n[0].String,$n[0].Int32]},{"a":2,"n":"pressedWithinRect","is":true,"t":8,"pi":[{"n":"rect","pt":$n[1].Rect,"ps":0}],"sn":"pressedWithinRect","rt":$n[0].Boolean,"p":[$n[1].Rect],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"reset","is":true,"t":8,"sn":"reset","rt":$n[0].Void},{"a":2,"n":"texture","is":true,"t":8,"pi":[{"n":"rect","pt":LTRect,"ps":0},{"n":"texture","pt":$n[1].Texture,"ps":1},{"n":"depth","pt":$n[0].Int32,"ps":2}],"sn":"texture","rt":LTRect,"p":[LTRect,$n[1].Texture,$n[0].Int32]},{"a":2,"n":"texture","is":true,"t":8,"pi":[{"n":"rect","pt":$n[1].Rect,"ps":0},{"n":"texture","pt":$n[1].Texture,"ps":1},{"n":"depth","pt":$n[0].Int32,"ps":2}],"sn":"texture$1","rt":LTRect,"p":[$n[1].Rect,$n[1].Texture,$n[0].Int32]},{"a":2,"n":"update","is":true,"t":8,"pi":[{"n":"updateLevel","pt":$n[0].Int32,"ps":0}],"sn":"update","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"BUTTONS_MAX","is":true,"t":4,"rt":$n[0].Int32,"sn":"BUTTONS_MAX","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"RECTS_PER_LEVEL","is":true,"t":4,"rt":$n[0].Int32,"sn":"RECTS_PER_LEVEL","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"RECT_LEVELS","is":true,"t":4,"rt":$n[0].Int32,"sn":"RECT_LEVELS","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"buttonLastFrame","is":true,"t":4,"rt":$n[0].Array.type(System.Int32),"sn":"buttonLastFrame"},{"a":1,"n":"buttonLevels","is":true,"t":4,"rt":$n[0].Array.type(System.Int32),"sn":"buttonLevels"},{"a":1,"n":"buttons","is":true,"t":4,"rt":System.Array.type(UnityEngine.Rect),"sn":"buttons"},{"a":1,"n":"color","is":true,"t":4,"rt":$n[1].Color,"sn":"color"},{"a":1,"n":"global_counter","is":true,"t":4,"rt":$n[0].Int32,"sn":"global_counter","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isGUIEnabled","is":true,"t":4,"rt":$n[0].Boolean,"sn":"isGUIEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"levelDepths","is":true,"t":4,"rt":$n[0].Array.type(System.Int32),"sn":"levelDepths"},{"a":1,"n":"levels","is":true,"t":4,"rt":System.Array.type(LTRect),"sn":"levels"},{"a":1,"n":"r","is":true,"t":4,"rt":LTRect,"sn":"r"}]}; }, $n);
    /*LTGUI end.*/

    /*LTGUI+Element_Type start.*/
    $m("LTGUI.Element_Type", function () { return {"td":LTGUI,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Label","is":true,"t":4,"rt":LTGUI.Element_Type,"sn":"Label","box":function ($v) { return Bridge.box($v, LTGUI.Element_Type, System.Enum.toStringFn(LTGUI.Element_Type));}},{"a":2,"n":"Texture","is":true,"t":4,"rt":LTGUI.Element_Type,"sn":"Texture","box":function ($v) { return Bridge.box($v, LTGUI.Element_Type, System.Enum.toStringFn(LTGUI.Element_Type));}}]}; }, $n);
    /*LTGUI+Element_Type end.*/

    /*LeanTweenExt start.*/
    $m("LeanTweenExt", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"LeanAlpha","is":true,"t":8,"pi":[{"n":"canvas","pt":$n[1].CanvasGroup,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanAlpha","rt":LTDescr,"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanAlpha","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanAlpha$1","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanAlpha","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanAlpha$2","rt":LTDescr,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanAlphaText","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanAlphaText","rt":LTDescr,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanAlphaVertex","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanAlphaVertex","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanCancel","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0}],"sn":"LeanCancel","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"LeanCancel","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0}],"sn":"LeanCancel$3","rt":$n[0].Void,"p":[$n[1].RectTransform]},{"a":2,"n":"LeanCancel","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callOnComplete","pt":$n[0].Boolean,"ps":1}],"sn":"LeanCancel$1","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Boolean]},{"a":2,"n":"LeanCancel","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"uniqueId","pt":$n[0].Int32,"ps":1},{"n":"callOnComplete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"LeanCancel$2","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"LeanColor","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0}],"sn":"LeanColor$1","rt":$n[1].Color,"p":[$n[1].Transform]},{"a":2,"n":"LeanColor","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[1].Color,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanColor","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Color,$n[0].Single]},{"a":2,"n":"LeanColorText","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].Color,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanColorText","rt":LTDescr,"p":[$n[1].RectTransform,$n[1].Color,$n[0].Single]},{"a":2,"n":"LeanDelayedCall","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"delayTime","pt":$n[0].Single,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"LeanDelayedCall","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,Function]},{"a":2,"n":"LeanDelayedCall","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"delayTime","pt":$n[0].Single,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"LeanDelayedCall$1","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,Function]},{"a":2,"n":"LeanIsPaused","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0}],"sn":"LeanIsPaused","rt":$n[0].Boolean,"p":[$n[1].GameObject],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LeanIsPaused","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0}],"sn":"LeanIsPaused$1","rt":$n[0].Boolean,"p":[$n[1].RectTransform],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LeanIsTweening","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0}],"sn":"LeanIsTweening","rt":$n[0].Boolean,"p":[$n[1].GameObject],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":LTBezierPath,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove","rt":LTDescr,"p":[$n[1].GameObject,LTBezierPath,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$1","rt":LTDescr,"p":[$n[1].GameObject,LTSpline,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[1].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$2","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$3","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$4","rt":LTDescr,"p":[$n[1].GameObject,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$5","rt":LTDescr,"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":LTBezierPath,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$6","rt":LTDescr,"p":[$n[1].Transform,LTBezierPath,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$7","rt":LTDescr,"p":[$n[1].Transform,LTSpline,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[1].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$8","rt":LTDescr,"p":[$n[1].Transform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$9","rt":LTDescr,"p":[$n[1].Transform,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$10","rt":LTDescr,"p":[$n[1].Transform,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"LeanMoveLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":LTBezierPath,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocal","rt":LTDescr,"p":[$n[1].GameObject,LTBezierPath,$n[0].Single]},{"a":2,"n":"LeanMoveLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocal$1","rt":LTDescr,"p":[$n[1].GameObject,LTSpline,$n[0].Single]},{"a":2,"n":"LeanMoveLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocal$2","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"LeanMoveLocal","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":LTBezierPath,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocal$3","rt":LTDescr,"p":[$n[1].Transform,LTBezierPath,$n[0].Single]},{"a":2,"n":"LeanMoveLocal","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocal$4","rt":LTDescr,"p":[$n[1].Transform,LTSpline,$n[0].Single]},{"a":2,"n":"LeanMoveLocal","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocal$5","rt":LTDescr,"p":[$n[1].Transform,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"LeanMoveLocalX","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocalX","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveLocalX","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocalX$1","rt":LTDescr,"p":[$n[1].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveLocalY","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocalY","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveLocalY","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocalY$1","rt":LTDescr,"p":[$n[1].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveLocalZ","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocalZ","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveLocalZ","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocalZ$1","rt":LTDescr,"p":[$n[1].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveSpline","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveSpline","rt":LTDescr,"p":[$n[1].GameObject,LTSpline,$n[0].Single]},{"a":2,"n":"LeanMoveSpline","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveSpline$1","rt":LTDescr,"p":[$n[1].GameObject,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"LeanMoveSpline","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveSpline$2","rt":LTDescr,"p":[$n[1].Transform,LTSpline,$n[0].Single]},{"a":2,"n":"LeanMoveSpline","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveSpline$3","rt":LTDescr,"p":[$n[1].Transform,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"LeanMoveSplineLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveSplineLocal","rt":LTDescr,"p":[$n[1].GameObject,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"LeanMoveSplineLocal","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveSplineLocal$1","rt":LTDescr,"p":[$n[1].Transform,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"LeanMoveX","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveX","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveX","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveX$1","rt":LTDescr,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveX","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveX$2","rt":LTDescr,"p":[$n[1].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveY","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveY","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveY","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveY$1","rt":LTDescr,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveY","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveY$2","rt":LTDescr,"p":[$n[1].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveZ","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveZ","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveZ","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveZ$1","rt":LTDescr,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveZ","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveZ$2","rt":LTDescr,"p":[$n[1].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanPause","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0}],"sn":"LeanPause","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"LeanPlay","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"sprites","pt":System.Array.type(UnityEngine.Sprite),"ps":1}],"sn":"LeanPlay","rt":LTDescr,"p":[$n[1].RectTransform,System.Array.type(UnityEngine.Sprite)]},{"a":2,"n":"LeanResume","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0}],"sn":"LeanResume","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"LeanRotate","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotate","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"LeanRotate","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotate$1","rt":LTDescr,"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"LeanRotate","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotate$2","rt":LTDescr,"p":[$n[1].Transform,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"LeanRotateAround","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"axis","pt":$n[1].Vector3,"ps":1},{"n":"add","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanRotateAround","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateAround","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"axis","pt":$n[1].Vector3,"ps":1},{"n":"add","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanRotateAround$1","rt":LTDescr,"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateAround","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"axis","pt":$n[1].Vector3,"ps":1},{"n":"add","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanRotateAround$2","rt":LTDescr,"p":[$n[1].Transform,$n[1].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateAroundLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"axis","pt":$n[1].Vector3,"ps":1},{"n":"add","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanRotateAroundLocal","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateAroundLocal","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"axis","pt":$n[1].Vector3,"ps":1},{"n":"add","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanRotateAroundLocal$1","rt":LTDescr,"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateAroundLocal","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"axis","pt":$n[1].Vector3,"ps":1},{"n":"add","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanRotateAroundLocal$2","rt":LTDescr,"p":[$n[1].Transform,$n[1].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateX","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotateX","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateX","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotateX$1","rt":LTDescr,"p":[$n[1].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateY","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotateY","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateY","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotateY$1","rt":LTDescr,"p":[$n[1].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateZ","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotateZ","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateZ","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotateZ$1","rt":LTDescr,"p":[$n[1].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanScale","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScale","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"LeanScale","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScale$1","rt":LTDescr,"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"LeanScale","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScale$2","rt":LTDescr,"p":[$n[1].Transform,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"LeanScaleX","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScaleX","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanScaleX","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScaleX$1","rt":LTDescr,"p":[$n[1].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanScaleY","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScaleY","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanScaleY","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScaleY$1","rt":LTDescr,"p":[$n[1].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanScaleZ","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScaleZ","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanScaleZ","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScaleZ$1","rt":LTDescr,"p":[$n[1].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanSetLocalPosX","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1}],"sn":"LeanSetLocalPosX","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single]},{"a":2,"n":"LeanSetLocalPosY","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1}],"sn":"LeanSetLocalPosY","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single]},{"a":2,"n":"LeanSetLocalPosZ","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1}],"sn":"LeanSetLocalPosZ","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single]},{"a":2,"n":"LeanSetPosX","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1}],"sn":"LeanSetPosX","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single]},{"a":2,"n":"LeanSetPosY","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1}],"sn":"LeanSetPosY","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single]},{"a":2,"n":"LeanSetPosZ","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1}],"sn":"LeanSetPosZ","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single]},{"a":2,"n":"LeanSize","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanSize","rt":LTDescr,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"from","pt":$n[0].Single,"ps":1},{"n":"to","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanValue$6","rt":LTDescr,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"from","pt":$n[1].Color,"ps":1},{"n":"to","pt":$n[1].Color,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanValue$7","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Color,$n[1].Color,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"from","pt":$n[1].Vector2,"ps":1},{"n":"to","pt":$n[1].Vector2,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanValue$8","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector2,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"from","pt":$n[1].Vector3,"ps":1},{"n":"to","pt":$n[1].Vector3,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanValue$9","rt":LTDescr,"p":[$n[1].GameObject,$n[1].Vector3,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[0].Single,"ps":2},{"n":"to","pt":$n[0].Single,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"LeanValue","rt":LTDescr,"p":[$n[1].GameObject,Function,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[0].Single,"ps":2},{"n":"to","pt":$n[0].Single,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"LeanValue$5","rt":LTDescr,"p":[$n[1].GameObject,Function,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[0].Single,"ps":2},{"n":"to","pt":$n[0].Single,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"LeanValue$4","rt":LTDescr,"p":[$n[1].GameObject,Function,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[1].Color,"ps":2},{"n":"to","pt":$n[1].Color,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"LeanValue$1","rt":LTDescr,"p":[$n[1].GameObject,Function,$n[1].Color,$n[1].Color,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[1].Vector2,"ps":2},{"n":"to","pt":$n[1].Vector2,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"LeanValue$2","rt":LTDescr,"p":[$n[1].GameObject,Function,$n[1].Vector2,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[1].Vector3,"ps":2},{"n":"to","pt":$n[1].Vector3,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"LeanValue$3","rt":LTDescr,"p":[$n[1].GameObject,Function,$n[1].Vector3,$n[1].Vector3,$n[0].Single]}]}; }, $n);
    /*LeanTweenExt end.*/

    /*LTDescr start.*/
    $m("LTDescr", function () { return {"nested":[Function,Function],"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"ToString","t":8,"sn":"toString","rt":$n[0].String},{"a":1,"n":"alphaRecursive","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1},{"n":"recursiveLevel","dv":0,"o":true,"pt":$n[0].Int32,"ps":2}],"sn":"alphaRecursive","rt":$n[0].Void,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Int32]},{"a":1,"n":"alphaRecursive","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1},{"n":"useRecursion","dv":true,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"alphaRecursive$1","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single,$n[0].Boolean]},{"a":1,"n":"alphaRecursiveSprite","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1}],"sn":"alphaRecursiveSprite","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single]},{"a":2,"n":"callOnCompletes","t":8,"sn":"callOnCompletes","rt":$n[0].Void},{"a":1,"n":"callback","t":8,"sn":"callback","rt":$n[0].Void},{"a":2,"n":"cancel","t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0}],"sn":"cancel","rt":LTDescr,"p":[$n[1].GameObject]},{"a":1,"n":"colorRecursive","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[1].RectTransform,"ps":0},{"n":"toColor","pt":$n[1].Color,"ps":1}],"sn":"colorRecursive","rt":$n[0].Void,"p":[$n[1].RectTransform,$n[1].Color]},{"a":1,"n":"colorRecursive","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"toColor","pt":$n[1].Color,"ps":1},{"n":"useRecursion","dv":true,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"colorRecursive$1","rt":$n[0].Void,"p":[$n[1].Transform,$n[1].Color,$n[0].Boolean]},{"a":1,"n":"colorRecursiveSprite","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"toColor","pt":$n[1].Color,"ps":1}],"sn":"colorRecursiveSprite","rt":$n[0].Void,"p":[$n[1].Transform,$n[1].Color]},{"a":1,"n":"easeInBack","t":8,"sn":"easeInBack","rt":$n[1].Vector3},{"a":1,"n":"easeInBounce","t":8,"sn":"easeInBounce","rt":$n[1].Vector3},{"a":1,"n":"easeInCirc","t":8,"sn":"easeInCirc","rt":$n[1].Vector3},{"a":1,"n":"easeInCubic","t":8,"sn":"easeInCubic","rt":$n[1].Vector3},{"a":1,"n":"easeInElastic","t":8,"sn":"easeInElastic","rt":$n[1].Vector3},{"a":1,"n":"easeInExpo","t":8,"sn":"easeInExpo","rt":$n[1].Vector3},{"a":1,"n":"easeInOutBack","t":8,"sn":"easeInOutBack","rt":$n[1].Vector3},{"a":1,"n":"easeInOutBounce","t":8,"sn":"easeInOutBounce","rt":$n[1].Vector3},{"a":1,"n":"easeInOutCirc","t":8,"sn":"easeInOutCirc","rt":$n[1].Vector3},{"a":1,"n":"easeInOutCubic","t":8,"sn":"easeInOutCubic","rt":$n[1].Vector3},{"a":1,"n":"easeInOutElastic","t":8,"sn":"easeInOutElastic","rt":$n[1].Vector3},{"a":1,"n":"easeInOutExpo","t":8,"sn":"easeInOutExpo","rt":$n[1].Vector3},{"a":1,"n":"easeInOutQuad","t":8,"sn":"easeInOutQuad","rt":$n[1].Vector3},{"a":1,"n":"easeInOutQuart","t":8,"sn":"easeInOutQuart","rt":$n[1].Vector3},{"a":1,"n":"easeInOutQuint","t":8,"sn":"easeInOutQuint","rt":$n[1].Vector3},{"a":1,"n":"easeInOutSine","t":8,"sn":"easeInOutSine","rt":$n[1].Vector3},{"a":1,"n":"easeInQuad","t":8,"sn":"easeInQuad","rt":$n[1].Vector3},{"a":1,"n":"easeInQuart","t":8,"sn":"easeInQuart","rt":$n[1].Vector3},{"a":1,"n":"easeInQuint","t":8,"sn":"easeInQuint","rt":$n[1].Vector3},{"a":1,"n":"easeInSine","t":8,"sn":"easeInSine","rt":$n[1].Vector3},{"a":1,"n":"easeLinear","t":8,"sn":"easeLinear","rt":$n[1].Vector3},{"a":1,"n":"easeOutBack","t":8,"sn":"easeOutBack","rt":$n[1].Vector3},{"a":1,"n":"easeOutBounce","t":8,"sn":"easeOutBounce","rt":$n[1].Vector3},{"a":1,"n":"easeOutCirc","t":8,"sn":"easeOutCirc","rt":$n[1].Vector3},{"a":1,"n":"easeOutCubic","t":8,"sn":"easeOutCubic","rt":$n[1].Vector3},{"a":1,"n":"easeOutElastic","t":8,"sn":"easeOutElastic","rt":$n[1].Vector3},{"a":1,"n":"easeOutExpo","t":8,"sn":"easeOutExpo","rt":$n[1].Vector3},{"a":1,"n":"easeOutQuad","t":8,"sn":"easeOutQuad","rt":$n[1].Vector3},{"a":1,"n":"easeOutQuart","t":8,"sn":"easeOutQuart","rt":$n[1].Vector3},{"a":1,"n":"easeOutQuint","t":8,"sn":"easeOutQuint","rt":$n[1].Vector3},{"a":1,"n":"easeOutSine","t":8,"sn":"easeOutSine","rt":$n[1].Vector3},{"a":1,"n":"easeSpring","t":8,"sn":"easeSpring","rt":$n[1].Vector3},{"a":1,"n":"init","t":8,"sn":"init","rt":$n[0].Void},{"a":1,"n":"initCanvasRotateAround","t":8,"sn":"initCanvasRotateAround","rt":$n[0].Void},{"a":1,"n":"initFromInternal","t":8,"sn":"initFromInternal","rt":$n[0].Void},{"a":1,"n":"initSpeed","t":8,"sn":"initSpeed","rt":$n[0].Void},{"a":2,"n":"pause","t":8,"sn":"pause","rt":LTDescr},{"a":2,"n":"reset","t":8,"sn":"reset","rt":$n[0].Void},{"a":2,"n":"resume","t":8,"sn":"resume","rt":LTDescr},{"a":2,"n":"setAlpha","t":8,"sn":"setAlpha","rt":LTDescr},{"a":2,"n":"setAlphaVertex","t":8,"sn":"setAlphaVertex","rt":LTDescr},{"a":2,"n":"setAudio","t":8,"pi":[{"n":"audio","pt":$n[0].Object,"ps":0}],"sn":"setAudio","rt":LTDescr,"p":[$n[0].Object]},{"a":2,"n":"setAxis","t":8,"pi":[{"n":"axis","pt":$n[1].Vector3,"ps":0}],"sn":"setAxis","rt":LTDescr,"p":[$n[1].Vector3]},{"a":2,"n":"setCallback","t":8,"sn":"setCallback","rt":LTDescr},{"a":2,"n":"setCallbackColor","t":8,"sn":"setCallbackColor","rt":LTDescr},{"a":2,"n":"setCanvasAlpha","t":8,"sn":"setCanvasAlpha","rt":LTDescr},{"a":2,"n":"setCanvasColor","t":8,"sn":"setCanvasColor","rt":LTDescr},{"a":2,"n":"setCanvasGroupAlpha","t":8,"sn":"setCanvasGroupAlpha","rt":LTDescr},{"a":2,"n":"setCanvasMove","t":8,"sn":"setCanvasMove","rt":LTDescr},{"a":2,"n":"setCanvasMoveX","t":8,"sn":"setCanvasMoveX","rt":LTDescr},{"a":2,"n":"setCanvasMoveY","t":8,"sn":"setCanvasMoveY","rt":LTDescr},{"a":2,"n":"setCanvasMoveZ","t":8,"sn":"setCanvasMoveZ","rt":LTDescr},{"a":2,"n":"setCanvasPlaySprite","t":8,"sn":"setCanvasPlaySprite","rt":LTDescr},{"a":2,"n":"setCanvasRotateAround","t":8,"sn":"setCanvasRotateAround","rt":LTDescr},{"a":2,"n":"setCanvasRotateAroundLocal","t":8,"sn":"setCanvasRotateAroundLocal","rt":LTDescr},{"a":2,"n":"setCanvasScale","t":8,"sn":"setCanvasScale","rt":LTDescr},{"a":2,"n":"setCanvasSizeDelta","t":8,"sn":"setCanvasSizeDelta","rt":LTDescr},{"a":2,"n":"setColor","t":8,"sn":"setColor","rt":LTDescr},{"a":2,"n":"setDelay","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0}],"sn":"setDelay","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setDelayedSound","t":8,"sn":"setDelayedSound","rt":LTDescr},{"a":2,"n":"setDestroyOnComplete","t":8,"pi":[{"n":"doesDestroy","pt":$n[0].Boolean,"ps":0}],"sn":"setDestroyOnComplete","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setDiff","t":8,"pi":[{"n":"diff","pt":$n[1].Vector3,"ps":0}],"sn":"setDiff","rt":LTDescr,"p":[$n[1].Vector3]},{"a":2,"n":"setDirection","t":8,"pi":[{"n":"direction","pt":$n[0].Single,"ps":0}],"sn":"setDirection","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setEase","t":8,"pi":[{"n":"easeType","pt":LeanTweenType,"ps":0}],"sn":"setEase","rt":LTDescr,"p":[LeanTweenType]},{"a":2,"n":"setEase","t":8,"pi":[{"n":"easeCurve","pt":pc.AnimationCurve,"ps":0}],"sn":"setEase$1","rt":LTDescr,"p":[pc.AnimationCurve]},{"a":2,"n":"setEaseInBack","t":8,"sn":"setEaseInBack","rt":LTDescr},{"a":2,"n":"setEaseInBounce","t":8,"sn":"setEaseInBounce","rt":LTDescr},{"a":2,"n":"setEaseInCirc","t":8,"sn":"setEaseInCirc","rt":LTDescr},{"a":2,"n":"setEaseInCubic","t":8,"sn":"setEaseInCubic","rt":LTDescr},{"a":2,"n":"setEaseInElastic","t":8,"sn":"setEaseInElastic","rt":LTDescr},{"a":2,"n":"setEaseInExpo","t":8,"sn":"setEaseInExpo","rt":LTDescr},{"a":2,"n":"setEaseInOutBack","t":8,"sn":"setEaseInOutBack","rt":LTDescr},{"a":2,"n":"setEaseInOutBounce","t":8,"sn":"setEaseInOutBounce","rt":LTDescr},{"a":2,"n":"setEaseInOutCirc","t":8,"sn":"setEaseInOutCirc","rt":LTDescr},{"a":2,"n":"setEaseInOutCubic","t":8,"sn":"setEaseInOutCubic","rt":LTDescr},{"a":2,"n":"setEaseInOutElastic","t":8,"sn":"setEaseInOutElastic","rt":LTDescr},{"a":2,"n":"setEaseInOutExpo","t":8,"sn":"setEaseInOutExpo","rt":LTDescr},{"a":2,"n":"setEaseInOutQuad","t":8,"sn":"setEaseInOutQuad","rt":LTDescr},{"a":2,"n":"setEaseInOutQuart","t":8,"sn":"setEaseInOutQuart","rt":LTDescr},{"a":2,"n":"setEaseInOutQuint","t":8,"sn":"setEaseInOutQuint","rt":LTDescr},{"a":2,"n":"setEaseInOutSine","t":8,"sn":"setEaseInOutSine","rt":LTDescr},{"a":2,"n":"setEaseInQuad","t":8,"sn":"setEaseInQuad","rt":LTDescr},{"a":2,"n":"setEaseInQuart","t":8,"sn":"setEaseInQuart","rt":LTDescr},{"a":2,"n":"setEaseInQuint","t":8,"sn":"setEaseInQuint","rt":LTDescr},{"a":2,"n":"setEaseInSine","t":8,"sn":"setEaseInSine","rt":LTDescr},{"a":2,"n":"setEaseLinear","t":8,"sn":"setEaseLinear","rt":LTDescr},{"a":2,"n":"setEaseOutBack","t":8,"sn":"setEaseOutBack","rt":LTDescr},{"a":2,"n":"setEaseOutBounce","t":8,"sn":"setEaseOutBounce","rt":LTDescr},{"a":2,"n":"setEaseOutCirc","t":8,"sn":"setEaseOutCirc","rt":LTDescr},{"a":2,"n":"setEaseOutCubic","t":8,"sn":"setEaseOutCubic","rt":LTDescr},{"a":2,"n":"setEaseOutElastic","t":8,"sn":"setEaseOutElastic","rt":LTDescr},{"a":2,"n":"setEaseOutExpo","t":8,"sn":"setEaseOutExpo","rt":LTDescr},{"a":2,"n":"setEaseOutQuad","t":8,"sn":"setEaseOutQuad","rt":LTDescr},{"a":2,"n":"setEaseOutQuart","t":8,"sn":"setEaseOutQuart","rt":LTDescr},{"a":2,"n":"setEaseOutQuint","t":8,"sn":"setEaseOutQuint","rt":LTDescr},{"a":2,"n":"setEaseOutSine","t":8,"sn":"setEaseOutSine","rt":LTDescr},{"a":2,"n":"setEasePunch","t":8,"sn":"setEasePunch","rt":LTDescr},{"a":2,"n":"setEaseShake","t":8,"sn":"setEaseShake","rt":LTDescr},{"a":2,"n":"setEaseSpring","t":8,"sn":"setEaseSpring","rt":LTDescr},{"a":2,"n":"setFollow","t":8,"sn":"setFollow","rt":LTDescr},{"a":2,"n":"setFrameRate","t":8,"pi":[{"n":"frameRate","pt":$n[0].Single,"ps":0}],"sn":"setFrameRate","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setFrom","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0}],"sn":"setFrom","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setFrom","t":8,"pi":[{"n":"from","pt":$n[1].Vector3,"ps":0}],"sn":"setFrom$1","rt":LTDescr,"p":[$n[1].Vector3]},{"a":2,"n":"setFromColor","t":8,"pi":[{"n":"col","pt":$n[1].Color,"ps":0}],"sn":"setFromColor","rt":LTDescr,"p":[$n[1].Color]},{"a":2,"n":"setGUIAlpha","t":8,"sn":"setGUIAlpha","rt":LTDescr},{"a":2,"n":"setGUIMove","t":8,"sn":"setGUIMove","rt":LTDescr},{"a":2,"n":"setGUIMoveMargin","t":8,"sn":"setGUIMoveMargin","rt":LTDescr},{"a":2,"n":"setGUIRotate","t":8,"sn":"setGUIRotate","rt":LTDescr},{"a":2,"n":"setGUIScale","t":8,"sn":"setGUIScale","rt":LTDescr},{"a":2,"n":"setHasInitialized","t":8,"pi":[{"n":"has","pt":$n[0].Boolean,"ps":0}],"sn":"setHasInitialized","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setId","t":8,"pi":[{"n":"id","pt":$n[0].UInt32,"ps":0},{"n":"global_counter","pt":$n[0].UInt32,"ps":1}],"sn":"setId","rt":LTDescr,"p":[$n[0].UInt32,$n[0].UInt32]},{"a":2,"n":"setIgnoreTimeScale","t":8,"pi":[{"n":"useUnScaledTime","pt":$n[0].Boolean,"ps":0}],"sn":"setIgnoreTimeScale","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setLoopClamp","t":8,"sn":"setLoopClamp","rt":LTDescr},{"a":2,"n":"setLoopClamp","t":8,"pi":[{"n":"loops","pt":$n[0].Int32,"ps":0}],"sn":"setLoopClamp$1","rt":LTDescr,"p":[$n[0].Int32]},{"a":2,"n":"setLoopCount","t":8,"pi":[{"n":"loopCount","pt":$n[0].Int32,"ps":0}],"sn":"setLoopCount","rt":LTDescr,"p":[$n[0].Int32]},{"a":2,"n":"setLoopOnce","t":8,"sn":"setLoopOnce","rt":LTDescr},{"a":2,"n":"setLoopPingPong","t":8,"sn":"setLoopPingPong","rt":LTDescr},{"a":2,"n":"setLoopPingPong","t":8,"pi":[{"n":"loops","pt":$n[0].Int32,"ps":0}],"sn":"setLoopPingPong$1","rt":LTDescr,"p":[$n[0].Int32]},{"a":2,"n":"setLoopType","t":8,"pi":[{"n":"loopType","pt":LeanTweenType,"ps":0}],"sn":"setLoopType","rt":LTDescr,"p":[LeanTweenType]},{"a":2,"n":"setMove","t":8,"sn":"setMove","rt":LTDescr},{"a":2,"n":"setMoveCurved","t":8,"sn":"setMoveCurved","rt":LTDescr},{"a":2,"n":"setMoveCurvedLocal","t":8,"sn":"setMoveCurvedLocal","rt":LTDescr},{"a":2,"n":"setMoveLocal","t":8,"sn":"setMoveLocal","rt":LTDescr},{"a":2,"n":"setMoveLocalX","t":8,"sn":"setMoveLocalX","rt":LTDescr},{"a":2,"n":"setMoveLocalY","t":8,"sn":"setMoveLocalY","rt":LTDescr},{"a":2,"n":"setMoveLocalZ","t":8,"sn":"setMoveLocalZ","rt":LTDescr},{"a":2,"n":"setMoveSpline","t":8,"sn":"setMoveSpline","rt":LTDescr},{"a":2,"n":"setMoveSplineLocal","t":8,"sn":"setMoveSplineLocal","rt":LTDescr},{"a":2,"n":"setMoveToTransform","t":8,"sn":"setMoveToTransform","rt":LTDescr},{"a":2,"n":"setMoveX","t":8,"sn":"setMoveX","rt":LTDescr},{"a":2,"n":"setMoveY","t":8,"sn":"setMoveY","rt":LTDescr},{"a":2,"n":"setMoveZ","t":8,"sn":"setMoveZ","rt":LTDescr},{"a":2,"n":"setOffset","t":8,"pi":[{"n":"offset","pt":$n[1].Vector3,"ps":0}],"sn":"setOffset","rt":LTDescr,"p":[$n[1].Vector3]},{"a":2,"n":"setOnComplete","t":8,"pi":[{"n":"onComplete","pt":Function,"ps":0}],"sn":"setOnComplete","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnComplete","t":8,"pi":[{"n":"onComplete","pt":Function,"ps":0}],"sn":"setOnComplete$1","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnComplete","t":8,"pi":[{"n":"onComplete","pt":Function,"ps":0},{"n":"onCompleteParam","pt":$n[0].Object,"ps":1}],"sn":"setOnComplete$2","rt":LTDescr,"p":[Function,$n[0].Object]},{"a":2,"n":"setOnCompleteOnRepeat","t":8,"pi":[{"n":"isOn","pt":$n[0].Boolean,"ps":0}],"sn":"setOnCompleteOnRepeat","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setOnCompleteOnStart","t":8,"pi":[{"n":"isOn","pt":$n[0].Boolean,"ps":0}],"sn":"setOnCompleteOnStart","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setOnCompleteParam","t":8,"pi":[{"n":"onCompleteParam","pt":$n[0].Object,"ps":0}],"sn":"setOnCompleteParam","rt":LTDescr,"p":[$n[0].Object]},{"a":2,"n":"setOnStart","t":8,"pi":[{"n":"onStart","pt":Function,"ps":0}],"sn":"setOnStart","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdate","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdate","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdate","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdate$1","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdate","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdate$5","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdate","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0},{"n":"onUpdateParam","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"setOnUpdate$4","rt":LTDescr,"p":[Function,$n[0].Object]},{"a":2,"n":"setOnUpdate","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0},{"n":"onUpdateParam","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"setOnUpdate$6","rt":LTDescr,"p":[Function,$n[0].Object]},{"a":2,"n":"setOnUpdate","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0},{"n":"onUpdateParam","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"setOnUpdate$2","rt":LTDescr,"p":[Function,$n[0].Object]},{"a":2,"n":"setOnUpdate","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0},{"n":"onUpdateParam","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"setOnUpdate$3","rt":LTDescr,"p":[Function,$n[0].Object]},{"a":2,"n":"setOnUpdateColor","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdateColor","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdateColor","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdateColor$1","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdateObject","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdateObject","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdateParam","t":8,"pi":[{"n":"onUpdateParam","pt":$n[0].Object,"ps":0}],"sn":"setOnUpdateParam","rt":LTDescr,"p":[$n[0].Object]},{"a":2,"n":"setOnUpdateRatio","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdateRatio","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdateVector2","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdateVector2","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdateVector3","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdateVector3","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOrientToPath","t":8,"pi":[{"n":"doesOrient","pt":$n[0].Boolean,"ps":0}],"sn":"setOrientToPath","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setOrientToPath2d","t":8,"pi":[{"n":"doesOrient2d","pt":$n[0].Boolean,"ps":0}],"sn":"setOrientToPath2d","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setOvershoot","t":8,"pi":[{"n":"overshoot","pt":$n[0].Single,"ps":0}],"sn":"setOvershoot","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setPassed","t":8,"pi":[{"n":"passed","pt":$n[0].Single,"ps":0}],"sn":"setPassed","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setPath","t":8,"pi":[{"n":"path","pt":LTBezierPath,"ps":0}],"sn":"setPath","rt":LTDescr,"p":[LTBezierPath]},{"a":2,"n":"setPeriod","t":8,"pi":[{"n":"period","pt":$n[0].Single,"ps":0}],"sn":"setPeriod","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setPoint","t":8,"pi":[{"n":"point","pt":$n[1].Vector3,"ps":0}],"sn":"setPoint","rt":LTDescr,"p":[$n[1].Vector3]},{"a":2,"n":"setRect","t":8,"pi":[{"n":"rect","pt":LTRect,"ps":0}],"sn":"setRect","rt":LTDescr,"p":[LTRect]},{"a":2,"n":"setRect","t":8,"pi":[{"n":"rect","pt":$n[1].Rect,"ps":0}],"sn":"setRect$1","rt":LTDescr,"p":[$n[1].Rect]},{"a":2,"n":"setRect","t":8,"pi":[{"n":"rect","pt":$n[1].RectTransform,"ps":0}],"sn":"setRect$2","rt":LTDescr,"p":[$n[1].RectTransform]},{"a":2,"n":"setRecursive","t":8,"pi":[{"n":"useRecursion","pt":$n[0].Boolean,"ps":0}],"sn":"setRecursive","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setRepeat","t":8,"pi":[{"n":"repeat","pt":$n[0].Int32,"ps":0}],"sn":"setRepeat","rt":LTDescr,"p":[$n[0].Int32]},{"a":2,"n":"setRotate","t":8,"sn":"setRotate","rt":LTDescr},{"a":2,"n":"setRotateAround","t":8,"sn":"setRotateAround","rt":LTDescr},{"a":2,"n":"setRotateAroundLocal","t":8,"sn":"setRotateAroundLocal","rt":LTDescr},{"a":2,"n":"setRotateLocal","t":8,"sn":"setRotateLocal","rt":LTDescr},{"a":2,"n":"setRotateX","t":8,"sn":"setRotateX","rt":LTDescr},{"a":2,"n":"setRotateY","t":8,"sn":"setRotateY","rt":LTDescr},{"a":2,"n":"setRotateZ","t":8,"sn":"setRotateZ","rt":LTDescr},{"a":2,"n":"setScale","t":8,"sn":"setScale","rt":LTDescr},{"a":2,"n":"setScale","t":8,"pi":[{"n":"scale","pt":$n[0].Single,"ps":0}],"sn":"setScale$1","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setScaleX","t":8,"sn":"setScaleX","rt":LTDescr},{"a":2,"n":"setScaleY","t":8,"sn":"setScaleY","rt":LTDescr},{"a":2,"n":"setScaleZ","t":8,"sn":"setScaleZ","rt":LTDescr},{"a":2,"n":"setSpeed","t":8,"pi":[{"n":"speed","pt":$n[0].Single,"ps":0}],"sn":"setSpeed","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setSprites","t":8,"pi":[{"n":"sprites","pt":System.Array.type(UnityEngine.Sprite),"ps":0}],"sn":"setSprites","rt":LTDescr,"p":[System.Array.type(UnityEngine.Sprite)]},{"a":2,"n":"setTarget","t":8,"pi":[{"n":"trans","pt":$n[1].Transform,"ps":0}],"sn":"setTarget","rt":LTDescr,"p":[$n[1].Transform]},{"a":2,"n":"setTextAlpha","t":8,"sn":"setTextAlpha","rt":LTDescr},{"a":2,"n":"setTextColor","t":8,"sn":"setTextColor","rt":LTDescr},{"a":2,"n":"setTime","t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"setTime","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setTo","t":8,"pi":[{"n":"to","pt":$n[1].Transform,"ps":0}],"sn":"setTo","rt":LTDescr,"p":[$n[1].Transform]},{"a":2,"n":"setTo","t":8,"pi":[{"n":"to","pt":$n[1].Vector3,"ps":0}],"sn":"setTo$1","rt":LTDescr,"p":[$n[1].Vector3]},{"a":2,"n":"setUseEstimatedTime","t":8,"pi":[{"n":"useEstimatedTime","pt":$n[0].Boolean,"ps":0}],"sn":"setUseEstimatedTime","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setUseFrames","t":8,"pi":[{"n":"useFrames","pt":$n[0].Boolean,"ps":0}],"sn":"setUseFrames","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setUseManualTime","t":8,"pi":[{"n":"useManualTime","pt":$n[0].Boolean,"ps":0}],"sn":"setUseManualTime","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setValue3","t":8,"sn":"setValue3","rt":LTDescr},{"a":1,"n":"textAlphaChildrenRecursive","is":true,"t":8,"pi":[{"n":"trans","pt":$n[1].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1},{"n":"useRecursion","dv":true,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"textAlphaChildrenRecursive","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single,$n[0].Boolean]},{"a":1,"n":"textAlphaRecursive","is":true,"t":8,"pi":[{"n":"trans","pt":$n[1].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1},{"n":"useRecursion","dv":true,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"textAlphaRecursive","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Single,$n[0].Boolean]},{"a":1,"n":"textColorRecursive","is":true,"t":8,"pi":[{"n":"trans","pt":$n[1].Transform,"ps":0},{"n":"toColor","pt":$n[1].Color,"ps":1}],"sn":"textColorRecursive","rt":$n[0].Void,"p":[$n[1].Transform,$n[1].Color]},{"a":1,"n":"tweenColor","is":true,"t":8,"pi":[{"n":"tween","pt":LTDescr,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1}],"sn":"tweenColor","rt":$n[1].Color,"p":[LTDescr,$n[0].Single]},{"a":1,"n":"tweenOnCurve","t":8,"sn":"tweenOnCurve","rt":$n[1].Vector3},{"a":2,"n":"updateInternal","t":8,"sn":"updateInternal","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"updateNow","t":8,"sn":"updateNow","rt":LTDescr},{"a":2,"n":"easeInternal","t":16,"rt":Function,"g":{"a":2,"n":"get_easeInternal","t":8,"rt":Function,"fg":"easeInternal"},"s":{"a":2,"n":"set_easeInternal","t":8,"p":[Function],"rt":$n[0].Void,"fs":"easeInternal"},"fn":"easeInternal"},{"a":2,"n":"from","t":16,"rt":$n[1].Vector3,"g":{"a":2,"n":"get_from","t":8,"rt":$n[1].Vector3,"fg":"from"},"s":{"a":2,"n":"set_from","t":8,"p":[$n[1].Vector3],"rt":$n[0].Void,"fs":"from"},"fn":"from"},{"a":2,"n":"id","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_id","t":8,"rt":$n[0].Int32,"fg":"id","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"id"},{"a":2,"n":"initInternal","t":16,"rt":Function,"g":{"a":2,"n":"get_initInternal","t":8,"rt":Function,"fg":"initInternal"},"s":{"a":2,"n":"set_initInternal","t":8,"p":[Function],"rt":$n[0].Void,"fs":"initInternal"},"fn":"initInternal"},{"a":2,"n":"optional","t":16,"rt":LTDescrOptional,"g":{"a":2,"n":"get_optional","t":8,"rt":LTDescrOptional,"fg":"optional"},"s":{"a":2,"n":"set_optional","t":8,"p":[LTDescrOptional],"rt":$n[0].Void,"fs":"optional"},"fn":"optional"},{"a":2,"n":"to","t":16,"rt":$n[1].Vector3,"g":{"a":2,"n":"get_to","t":8,"rt":$n[1].Vector3,"fg":"to"},"s":{"a":2,"n":"set_to","t":8,"p":[$n[1].Vector3],"rt":$n[0].Void,"fs":"to"},"fn":"to"},{"a":2,"n":"toTrans","t":16,"rt":$n[1].Transform,"g":{"a":2,"n":"get_toTrans","t":8,"rt":$n[1].Transform,"fg":"toTrans"},"fn":"toTrans"},{"a":2,"n":"uniqueId","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_uniqueId","t":8,"rt":$n[0].Int32,"fg":"uniqueId","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"uniqueId"},{"a":1,"n":"_id","t":4,"rt":$n[0].UInt32,"sn":"_id","box":function ($v) { return Bridge.box($v, System.UInt32);}},{"a":2,"n":"_optional","t":4,"rt":LTDescrOptional,"sn":"_optional"},{"a":2,"n":"counter","t":4,"rt":$n[0].UInt32,"sn":"counter","box":function ($v) { return Bridge.box($v, System.UInt32);}},{"a":2,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"destroyOnComplete","t":4,"rt":$n[0].Boolean,"sn":"destroyOnComplete","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":4,"n":"diff","t":4,"rt":$n[1].Vector3,"sn":"diff"},{"a":4,"n":"diffDiv2","t":4,"rt":$n[1].Vector3,"sn":"diffDiv2"},{"a":2,"n":"direction","t":4,"rt":$n[0].Single,"sn":"direction","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"directionLast","t":4,"rt":$n[0].Single,"sn":"directionLast","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"dt","is":true,"t":4,"rt":$n[0].Single,"sn":"dt","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeMethod","t":4,"rt":Function,"sn":"easeMethod"},{"a":1,"n":"easeType","t":4,"rt":LeanTweenType,"sn":"easeType","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":4,"n":"fromInternal","t":4,"rt":$n[1].Vector3,"sn":"fromInternal"},{"a":2,"n":"hasExtraOnCompletes","t":4,"rt":$n[0].Boolean,"sn":"hasExtraOnCompletes","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"hasInitiliazed","t":4,"rt":$n[0].Boolean,"sn":"hasInitiliazed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"hasPhysics","t":4,"rt":$n[0].Boolean,"sn":"hasPhysics","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"hasUpdateCallback","t":4,"rt":$n[0].Boolean,"sn":"hasUpdateCallback","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"lastVal","t":4,"rt":$n[0].Single,"sn":"lastVal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"loopCount","t":4,"rt":$n[0].Int32,"sn":"loopCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"loopType","t":4,"rt":LeanTweenType,"sn":"loopType","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"newVect","is":true,"t":4,"rt":$n[1].Vector3,"sn":"newVect"},{"a":2,"n":"onCompleteOnRepeat","t":4,"rt":$n[0].Boolean,"sn":"onCompleteOnRepeat","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"onCompleteOnStart","t":4,"rt":$n[0].Boolean,"sn":"onCompleteOnStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"overshoot","t":4,"rt":$n[0].Single,"sn":"overshoot","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"passed","t":4,"rt":$n[0].Single,"sn":"passed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"period","t":4,"rt":$n[0].Single,"sn":"period","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ratioPassed","t":4,"rt":$n[0].Single,"sn":"ratioPassed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rawImage","t":4,"rt":$n[3].RawImage,"sn":"rawImage"},{"a":2,"n":"rectTransform","t":4,"rt":$n[1].RectTransform,"sn":"rectTransform"},{"a":2,"n":"scale","t":4,"rt":$n[0].Single,"sn":"scale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spriteRen","t":4,"rt":$n[1].SpriteRenderer,"sn":"spriteRen"},{"a":2,"n":"sprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"sprites"},{"a":2,"n":"time","t":4,"rt":$n[0].Single,"sn":"time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":4,"n":"toInternal","t":4,"rt":$n[1].Vector3,"sn":"toInternal"},{"a":2,"n":"toggle","t":4,"rt":$n[0].Boolean,"sn":"toggle","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"trans","t":4,"rt":$n[1].Transform,"sn":"trans"},{"a":2,"n":"type","t":4,"rt":TweenAction,"sn":"type","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"uiImage","t":4,"rt":$n[3].Image,"sn":"uiImage"},{"a":2,"n":"uiText","t":4,"rt":$n[3].Text,"sn":"uiText"},{"a":2,"n":"useEstimatedTime","t":4,"rt":$n[0].Boolean,"sn":"useEstimatedTime","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useFrames","t":4,"rt":$n[0].Boolean,"sn":"useFrames","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useManualTime","t":4,"rt":$n[0].Boolean,"sn":"useManualTime","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useRecursion","t":4,"rt":$n[0].Boolean,"sn":"useRecursion","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"usesNormalDt","t":4,"rt":$n[0].Boolean,"sn":"usesNormalDt","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"val","is":true,"t":4,"rt":$n[0].Single,"sn":"val","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<easeInternal>k__BackingField","t":4,"rt":Function,"sn":"easeInternal"},{"a":1,"backing":true,"n":"<initInternal>k__BackingField","t":4,"rt":Function,"sn":"initInternal"}]}; }, $n);
    /*LTDescr end.*/

    /*LTDescrOptional start.*/
    $m("LTDescrOptional", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"callOnUpdate","t":8,"pi":[{"n":"val","pt":$n[0].Single,"ps":0},{"n":"ratioPassed","pt":$n[0].Single,"ps":1}],"sn":"callOnUpdate","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":2,"n":"reset","t":8,"sn":"reset","rt":$n[0].Void},{"a":2,"n":"axis","t":16,"rt":$n[1].Vector3,"g":{"a":2,"n":"get_axis","t":8,"rt":$n[1].Vector3,"fg":"axis"},"s":{"a":2,"n":"set_axis","t":8,"p":[$n[1].Vector3],"rt":$n[0].Void,"fs":"axis"},"fn":"axis"},{"a":2,"n":"lastVal","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_lastVal","t":8,"rt":$n[0].Single,"fg":"lastVal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_lastVal","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"lastVal"},"fn":"lastVal"},{"a":2,"n":"ltRect","t":16,"rt":LTRect,"g":{"a":2,"n":"get_ltRect","t":8,"rt":LTRect,"fg":"ltRect"},"s":{"a":2,"n":"set_ltRect","t":8,"p":[LTRect],"rt":$n[0].Void,"fs":"ltRect"},"fn":"ltRect"},{"a":2,"n":"onComplete","t":16,"rt":Function,"g":{"a":2,"n":"get_onComplete","t":8,"rt":Function,"fg":"onComplete"},"s":{"a":2,"n":"set_onComplete","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onComplete"},"fn":"onComplete"},{"a":2,"n":"onCompleteObject","t":16,"rt":Function,"g":{"a":2,"n":"get_onCompleteObject","t":8,"rt":Function,"fg":"onCompleteObject"},"s":{"a":2,"n":"set_onCompleteObject","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onCompleteObject"},"fn":"onCompleteObject"},{"a":2,"n":"onCompleteParam","t":16,"rt":$n[0].Object,"g":{"a":2,"n":"get_onCompleteParam","t":8,"rt":$n[0].Object,"fg":"onCompleteParam"},"s":{"a":2,"n":"set_onCompleteParam","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"onCompleteParam"},"fn":"onCompleteParam"},{"a":2,"n":"onStart","t":16,"rt":Function,"g":{"a":2,"n":"get_onStart","t":8,"rt":Function,"fg":"onStart"},"s":{"a":2,"n":"set_onStart","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onStart"},"fn":"onStart"},{"a":2,"n":"onUpdateColor","t":16,"rt":Function,"g":{"a":2,"n":"get_onUpdateColor","t":8,"rt":Function,"fg":"onUpdateColor"},"s":{"a":2,"n":"set_onUpdateColor","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onUpdateColor"},"fn":"onUpdateColor"},{"a":2,"n":"onUpdateColorObject","t":16,"rt":Function,"g":{"a":2,"n":"get_onUpdateColorObject","t":8,"rt":Function,"fg":"onUpdateColorObject"},"s":{"a":2,"n":"set_onUpdateColorObject","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onUpdateColorObject"},"fn":"onUpdateColorObject"},{"a":2,"n":"onUpdateFloat","t":16,"rt":Function,"g":{"a":2,"n":"get_onUpdateFloat","t":8,"rt":Function,"fg":"onUpdateFloat"},"s":{"a":2,"n":"set_onUpdateFloat","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onUpdateFloat"},"fn":"onUpdateFloat"},{"a":2,"n":"onUpdateFloatObject","t":16,"rt":Function,"g":{"a":2,"n":"get_onUpdateFloatObject","t":8,"rt":Function,"fg":"onUpdateFloatObject"},"s":{"a":2,"n":"set_onUpdateFloatObject","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onUpdateFloatObject"},"fn":"onUpdateFloatObject"},{"a":2,"n":"onUpdateFloatRatio","t":16,"rt":Function,"g":{"a":2,"n":"get_onUpdateFloatRatio","t":8,"rt":Function,"fg":"onUpdateFloatRatio"},"s":{"a":2,"n":"set_onUpdateFloatRatio","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onUpdateFloatRatio"},"fn":"onUpdateFloatRatio"},{"a":2,"n":"onUpdateParam","t":16,"rt":$n[0].Object,"g":{"a":2,"n":"get_onUpdateParam","t":8,"rt":$n[0].Object,"fg":"onUpdateParam"},"s":{"a":2,"n":"set_onUpdateParam","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"onUpdateParam"},"fn":"onUpdateParam"},{"a":2,"n":"onUpdateVector2","t":16,"rt":Function,"g":{"a":2,"n":"get_onUpdateVector2","t":8,"rt":Function,"fg":"onUpdateVector2"},"s":{"a":2,"n":"set_onUpdateVector2","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onUpdateVector2"},"fn":"onUpdateVector2"},{"a":2,"n":"onUpdateVector3","t":16,"rt":Function,"g":{"a":2,"n":"get_onUpdateVector3","t":8,"rt":Function,"fg":"onUpdateVector3"},"s":{"a":2,"n":"set_onUpdateVector3","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onUpdateVector3"},"fn":"onUpdateVector3"},{"a":2,"n":"onUpdateVector3Object","t":16,"rt":Function,"g":{"a":2,"n":"get_onUpdateVector3Object","t":8,"rt":Function,"fg":"onUpdateVector3Object"},"s":{"a":2,"n":"set_onUpdateVector3Object","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onUpdateVector3Object"},"fn":"onUpdateVector3Object"},{"a":2,"n":"origRotation","t":16,"rt":$n[1].Quaternion,"g":{"a":2,"n":"get_origRotation","t":8,"rt":$n[1].Quaternion,"fg":"origRotation"},"s":{"a":2,"n":"set_origRotation","t":8,"p":[$n[1].Quaternion],"rt":$n[0].Void,"fs":"origRotation"},"fn":"origRotation"},{"a":2,"n":"path","t":16,"rt":LTBezierPath,"g":{"a":2,"n":"get_path","t":8,"rt":LTBezierPath,"fg":"path"},"s":{"a":2,"n":"set_path","t":8,"p":[LTBezierPath],"rt":$n[0].Void,"fs":"path"},"fn":"path"},{"a":2,"n":"point","t":16,"rt":$n[1].Vector3,"g":{"a":2,"n":"get_point","t":8,"rt":$n[1].Vector3,"fg":"point"},"s":{"a":2,"n":"set_point","t":8,"p":[$n[1].Vector3],"rt":$n[0].Void,"fs":"point"},"fn":"point"},{"a":2,"n":"spline","t":16,"rt":LTSpline,"g":{"a":2,"n":"get_spline","t":8,"rt":LTSpline,"fg":"spline"},"s":{"a":2,"n":"set_spline","t":8,"p":[LTSpline],"rt":$n[0].Void,"fs":"spline"},"fn":"spline"},{"a":2,"n":"toTrans","t":16,"rt":$n[1].Transform,"g":{"a":2,"n":"get_toTrans","t":8,"rt":$n[1].Transform,"fg":"toTrans"},"s":{"a":2,"n":"set_toTrans","t":8,"p":[$n[1].Transform],"rt":$n[0].Void,"fs":"toTrans"},"fn":"toTrans"},{"a":2,"n":"animationCurve","t":4,"rt":pc.AnimationCurve,"sn":"animationCurve"},{"a":2,"n":"color","t":4,"rt":$n[1].Color,"sn":"color"},{"a":2,"n":"initFrameCount","t":4,"rt":$n[0].Int32,"sn":"initFrameCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<axis>k__BackingField","t":4,"rt":$n[1].Vector3,"sn":"axis"},{"a":1,"backing":true,"n":"<lastVal>k__BackingField","t":4,"rt":$n[0].Single,"sn":"lastVal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<ltRect>k__BackingField","t":4,"rt":LTRect,"sn":"ltRect"},{"a":1,"backing":true,"n":"<onComplete>k__BackingField","t":4,"rt":Function,"sn":"onComplete"},{"a":1,"backing":true,"n":"<onCompleteObject>k__BackingField","t":4,"rt":Function,"sn":"onCompleteObject"},{"a":1,"backing":true,"n":"<onCompleteParam>k__BackingField","t":4,"rt":$n[0].Object,"sn":"onCompleteParam"},{"a":1,"backing":true,"n":"<onStart>k__BackingField","t":4,"rt":Function,"sn":"onStart"},{"a":1,"backing":true,"n":"<onUpdateColor>k__BackingField","t":4,"rt":Function,"sn":"onUpdateColor"},{"a":1,"backing":true,"n":"<onUpdateColorObject>k__BackingField","t":4,"rt":Function,"sn":"onUpdateColorObject"},{"a":1,"backing":true,"n":"<onUpdateFloat>k__BackingField","t":4,"rt":Function,"sn":"onUpdateFloat"},{"a":1,"backing":true,"n":"<onUpdateFloatObject>k__BackingField","t":4,"rt":Function,"sn":"onUpdateFloatObject"},{"a":1,"backing":true,"n":"<onUpdateFloatRatio>k__BackingField","t":4,"rt":Function,"sn":"onUpdateFloatRatio"},{"a":1,"backing":true,"n":"<onUpdateParam>k__BackingField","t":4,"rt":$n[0].Object,"sn":"onUpdateParam"},{"a":1,"backing":true,"n":"<onUpdateVector2>k__BackingField","t":4,"rt":Function,"sn":"onUpdateVector2"},{"a":1,"backing":true,"n":"<onUpdateVector3>k__BackingField","t":4,"rt":Function,"sn":"onUpdateVector3"},{"a":1,"backing":true,"n":"<onUpdateVector3Object>k__BackingField","t":4,"rt":Function,"sn":"onUpdateVector3Object"},{"a":1,"backing":true,"n":"<origRotation>k__BackingField","t":4,"rt":$n[1].Quaternion,"sn":"origRotation"},{"a":1,"backing":true,"n":"<path>k__BackingField","t":4,"rt":LTBezierPath,"sn":"path"},{"a":1,"backing":true,"n":"<point>k__BackingField","t":4,"rt":$n[1].Vector3,"sn":"point"},{"a":1,"backing":true,"n":"<spline>k__BackingField","t":4,"rt":LTSpline,"sn":"spline"},{"a":1,"backing":true,"n":"<toTrans>k__BackingField","t":4,"rt":$n[1].Transform,"sn":"toTrans"}]}; }, $n);
    /*LTDescrOptional end.*/

    /*LTSeq start.*/
    $m("LTSeq", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"addOn","t":8,"sn":"addOn","rt":LTSeq},{"a":1,"n":"addPreviousDelays","t":8,"sn":"addPreviousDelays","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"append","t":8,"pi":[{"n":"tween","pt":LTDescr,"ps":0}],"sn":"append","rt":LTSeq,"p":[LTDescr]},{"a":2,"n":"append","t":8,"pi":[{"n":"callback","pt":Function,"ps":0}],"sn":"append$1","rt":LTSeq,"p":[Function]},{"a":2,"n":"append","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0}],"sn":"append$3","rt":LTSeq,"p":[$n[0].Single]},{"a":2,"n":"append","t":8,"pi":[{"n":"callback","pt":Function,"ps":0},{"n":"obj","pt":$n[0].Object,"ps":1}],"sn":"append$2","rt":LTSeq,"p":[Function,$n[0].Object]},{"a":2,"n":"append","t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callback","pt":Function,"ps":1}],"sn":"append$4","rt":LTSeq,"p":[$n[1].GameObject,Function]},{"a":2,"n":"append","t":8,"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"callback","pt":Function,"ps":1},{"n":"obj","pt":$n[0].Object,"ps":2}],"sn":"append$5","rt":LTSeq,"p":[$n[1].GameObject,Function,$n[0].Object]},{"a":2,"n":"init","t":8,"pi":[{"n":"id","pt":$n[0].UInt32,"ps":0},{"n":"global_counter","pt":$n[0].UInt32,"ps":1}],"sn":"init","rt":$n[0].Void,"p":[$n[0].UInt32,$n[0].UInt32]},{"a":2,"n":"insert","t":8,"pi":[{"n":"tween","pt":LTDescr,"ps":0}],"sn":"insert","rt":LTSeq,"p":[LTDescr]},{"a":2,"n":"reset","t":8,"sn":"reset","rt":$n[0].Void},{"a":2,"n":"reverse","t":8,"sn":"reverse","rt":LTSeq},{"a":2,"n":"setScale","t":8,"pi":[{"n":"timeScale","pt":$n[0].Single,"ps":0}],"sn":"setScale","rt":LTSeq,"p":[$n[0].Single]},{"a":1,"n":"setScaleRecursive","t":8,"pi":[{"n":"seq","pt":LTSeq,"ps":0},{"n":"timeScale","pt":$n[0].Single,"ps":1},{"n":"count","pt":$n[0].Int32,"ps":2}],"sn":"setScaleRecursive","rt":$n[0].Void,"p":[LTSeq,$n[0].Single,$n[0].Int32]},{"a":2,"n":"id","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_id","t":8,"rt":$n[0].Int32,"fg":"id","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"id"},{"a":1,"n":"_id","t":4,"rt":$n[0].UInt32,"sn":"_id","box":function ($v) { return Bridge.box($v, System.UInt32);}},{"a":2,"n":"counter","t":4,"rt":$n[0].UInt32,"sn":"counter","box":function ($v) { return Bridge.box($v, System.UInt32);}},{"a":2,"n":"current","t":4,"rt":LTSeq,"sn":"current"},{"a":1,"n":"debugIter","t":4,"rt":$n[0].Int32,"sn":"debugIter","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"previous","t":4,"rt":LTSeq,"sn":"previous"},{"a":2,"n":"timeScale","t":4,"rt":$n[0].Single,"sn":"timeScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"toggle","t":4,"rt":$n[0].Boolean,"sn":"toggle","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"totalDelay","t":4,"rt":$n[0].Single,"sn":"totalDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"tween","t":4,"rt":LTDescr,"sn":"tween"}]}; }, $n);
    /*LTSeq end.*/

    /*BadOpEffect start.*/
    $m("BadOpEffect", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"mCanvasGroup","t":4,"rt":$n[1].CanvasGroup,"sn":"mCanvasGroup"}]}; }, $n);
    /*BadOpEffect end.*/

    /*BaoZhaEffect start.*/
    $m("BaoZhaEffect", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SetImage","t":8,"pi":[{"n":"mMgr","pt":GameMgr,"ps":0},{"n":"Key","pt":$n[0].String,"ps":1}],"sn":"SetImage","rt":$n[0].Void,"p":[GameMgr,$n[0].String]},{"a":2,"n":"mImage","t":4,"rt":$n[3].Image,"sn":"mImage"}]}; }, $n);
    /*BaoZhaEffect end.*/

    /*GameMgr start.*/
    $m("GameMgr", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DoMove","t":8,"sn":"DoMove","rt":$n[0].Void},{"a":1,"n":"GetPos","t":8,"pi":[{"n":"nX","pt":$n[0].Int32,"ps":0},{"n":"nY","pt":$n[0].Int32,"ps":1}],"sn":"GetPos","rt":$n[1].Vector3,"p":[$n[0].Int32,$n[0].Int32]},{"a":1,"n":"InitGame","t":8,"sn":"InitGame","rt":$n[0].Void},{"a":2,"n":"OnClickCell","t":8,"pi":[{"n":"mSelect","pt":Item,"ps":0}],"sn":"OnClickCell","rt":$n[0].Void,"p":[Item]},{"a":1,"n":"PopItem","t":8,"sn":"PopItem","rt":Item},{"a":1,"n":"RecycleItem","t":8,"pi":[{"n":"mItem","pt":Item,"ps":0}],"sn":"RecycleItem","rt":$n[0].Void,"p":[Item]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"BadOpEffect","t":4,"rt":$n[1].GameObject,"sn":"BadOpEffect"},{"a":2,"n":"ItemParent","t":4,"rt":$n[1].Transform,"sn":"ItemParent"},{"a":1,"n":"cellSize","t":4,"rt":$n[1].Vector2,"sn":"cellSize","ro":true},{"a":2,"n":"goClickOk","t":4,"rt":$n[1].GameObject,"sn":"goClickOk"},{"a":2,"n":"mBaoZhaEffect","t":4,"rt":BaoZhaEffect,"sn":"mBaoZhaEffect"},{"a":1,"n":"mBaoZhaEffectPool","t":4,"rt":NodeComponentPool$1(BaoZhaEffect),"sn":"mBaoZhaEffectPool","ro":true},{"a":1,"n":"mItemList","t":4,"rt":$n[4].List$1(System.Collections.Generic.List$1(Item)),"sn":"mItemList","ro":true},{"a":1,"n":"mItemPool","t":4,"rt":$n[4].List$1(Item),"sn":"mItemPool","ro":true},{"a":2,"n":"mItemPrefab","t":4,"rt":Item,"sn":"mItemPrefab"},{"a":2,"n":"mLoadingView","t":4,"rt":Loading,"sn":"mLoadingView"},{"a":2,"n":"mResMgr","t":4,"rt":CommonResSerialization,"sn":"mResMgr"},{"a":1,"n":"mSelectItemList","t":4,"rt":$n[4].List$1(Item),"sn":"mSelectItemList","ro":true},{"a":1,"n":"mSpriteList","t":4,"rt":$n[4].List$1(UnityEngine.Sprite),"sn":"mSpriteList"},{"a":1,"n":"nMaxX","is":true,"t":4,"rt":$n[0].Int32,"sn":"nMaxX","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"nMaxY","is":true,"t":4,"rt":$n[0].Int32,"sn":"nMaxY","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"nXiaoChuCount","t":4,"rt":$n[0].Int32,"sn":"nXiaoChuCount","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*GameMgr end.*/

    /*Item start.*/
    $m("Item", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnSelect","t":8,"pi":[{"n":"mSelectItemList","pt":$n[4].List$1(Item),"ps":0}],"sn":"OnSelect","rt":$n[0].Void,"p":[$n[4].List$1(Item)]},{"a":2,"n":"Refresh","t":8,"pi":[{"n":"mMgr","pt":GameMgr,"ps":0},{"n":"Key","pt":$n[1].Sprite,"ps":1}],"sn":"Refresh","rt":$n[0].Void,"p":[GameMgr,$n[1].Sprite]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Key","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Key","t":8,"rt":$n[0].String,"fg":"Key"},"fn":"Key"},{"a":2,"n":"clickBtn","t":4,"rt":$n[3].Button,"sn":"clickBtn"},{"a":2,"n":"mDiBan","t":4,"rt":$n[3].Image,"sn":"mDiBan"},{"a":2,"n":"mImage","t":4,"rt":$n[3].Image,"sn":"mImage"},{"a":1,"n":"mMgr","t":4,"rt":GameMgr,"sn":"mMgr"}]}; }, $n);
    /*Item end.*/

    /*Loading start.*/
    $m("Loading", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"mSlider","t":4,"rt":$n[3].Slider,"sn":"mSlider"}]}; }, $n);
    /*Loading end.*/

    /*NodeComponentPool$1 start.*/
    $m("NodeComponentPool$1", function (T) { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetSumCount","t":8,"sn":"GetSumCount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Init","t":8,"pi":[{"n":"mItemPrefab","pt":$n[1].GameObject,"ps":0},{"n":"nInitCount","dv":0,"o":true,"pt":$n[0].Int32,"ps":1}],"sn":"Init","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Int32]},{"a":1,"n":"InnerCreateItem","t":8,"sn":"InnerCreateItem","rt":T},{"a":2,"n":"SetItemParent","t":8,"pi":[{"n":"ItemParent","pt":$n[1].Transform,"ps":0}],"sn":"SetItemParent","rt":$n[0].Void,"p":[$n[1].Transform]},{"a":2,"n":"SetMaxCapacity","t":8,"pi":[{"n":"nMaxCapacity","pt":$n[0].Int32,"ps":0}],"sn":"SetMaxCapacity","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"popObj","t":8,"sn":"popObj","rt":T},{"a":2,"n":"preLoadObj","t":8,"pi":[{"n":"nMaxCount","pt":$n[0].Int32,"ps":0}],"sn":"preLoadObj","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"preLoadObj","t":8,"pi":[{"n":"nFrameCount","pt":$n[0].Int32,"ps":0},{"n":"nCount","pt":$n[0].Int32,"ps":1},{"n":"finishFunc","dv":null,"o":true,"pt":Function,"ps":2}],"sn":"preLoadObj$1","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32,Function]},{"a":2,"n":"recycleObj","t":8,"pi":[{"n":"obj","pt":T,"ps":0}],"sn":"recycleObj","rt":$n[0].Void,"p":[T]},{"a":1,"n":"ItemParent","t":4,"rt":$n[1].Transform,"sn":"ItemParent"},{"a":1,"n":"mItemPrefab","t":4,"rt":$n[1].GameObject,"sn":"mItemPrefab"},{"a":1,"n":"nMaxCapicity","t":4,"rt":$n[0].Int32,"sn":"nMaxCapicity","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"pool","t":4,"rt":$n[4].Stack$1(T),"sn":"pool","ro":true},{"a":2,"n":"usedArray","t":4,"rt":$n[4].List$1(T),"sn":"usedArray","ro":true}]}; }, $n);
    /*NodeComponentPool$1 end.*/

    /*NodePool start.*/
    $m("NodePool", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetSumCount","t":8,"sn":"GetSumCount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Init","t":8,"pi":[{"n":"mItemPrefab","pt":$n[1].GameObject,"ps":0},{"n":"nInitCount","dv":0,"o":true,"pt":$n[0].Int32,"ps":1}],"sn":"Init","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Int32]},{"a":1,"n":"InnerCreateItem","t":8,"sn":"InnerCreateItem","rt":$n[1].GameObject},{"a":2,"n":"SetItemParent","t":8,"pi":[{"n":"ItemParent","pt":$n[1].Transform,"ps":0}],"sn":"SetItemParent","rt":$n[0].Void,"p":[$n[1].Transform]},{"a":2,"n":"SetMaxCapacity","t":8,"pi":[{"n":"nMaxCapacity","pt":$n[0].Int32,"ps":0}],"sn":"SetMaxCapacity","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"popObj","t":8,"sn":"popObj","rt":$n[1].GameObject},{"a":2,"n":"preLoadObj","t":8,"pi":[{"n":"nMaxCount","pt":$n[0].Int32,"ps":0}],"sn":"preLoadObj","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"preLoadObj","t":8,"pi":[{"n":"nFrameCount","pt":$n[0].Int32,"ps":0},{"n":"nCount","pt":$n[0].Int32,"ps":1},{"n":"finishFunc","dv":null,"o":true,"pt":Function,"ps":2}],"sn":"preLoadObj$1","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32,Function]},{"a":2,"n":"preLoadObj_Co","t":8,"pi":[{"n":"nFrameCount","pt":$n[0].Int32,"ps":0},{"n":"nCount","pt":$n[0].Int32,"ps":1},{"n":"finishFunc","dv":null,"o":true,"pt":Function,"ps":2}],"sn":"preLoadObj_Co","rt":$n[5].IEnumerator,"p":[$n[0].Int32,$n[0].Int32,Function]},{"a":2,"n":"recycleObj","t":8,"pi":[{"n":"obj","pt":$n[1].GameObject,"ps":0}],"sn":"recycleObj","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":1,"n":"ItemParent","t":4,"rt":$n[1].Transform,"sn":"ItemParent"},{"a":1,"n":"mItemPrefab","t":4,"rt":$n[1].GameObject,"sn":"mItemPrefab"},{"a":1,"n":"nMaxCapicity","t":4,"rt":$n[0].Int32,"sn":"nMaxCapicity","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"pool","t":4,"rt":$n[4].Stack$1(UnityEngine.GameObject),"sn":"pool","ro":true},{"a":2,"n":"usedArray","t":4,"rt":$n[4].List$1(UnityEngine.GameObject),"sn":"usedArray","ro":true}]}; }, $n);
    /*NodePool end.*/

    /*FixedTimeMgr start.*/
    $m("FixedTimeMgr", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddListener","t":8,"pi":[{"n":"func","pt":Function,"ps":0}],"sn":"AddListener","rt":$n[0].Void,"p":[Function]},{"a":2,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"RemoveListener","t":8,"pi":[{"n":"func","pt":Function,"ps":0}],"sn":"RemoveListener","rt":$n[0].Void,"p":[Function]},{"a":1,"n":"mapUpdateFunc","t":4,"rt":$n[4].List$1(Function),"sn":"mapUpdateFunc","ro":true}]}; }, $n);
    /*FixedTimeMgr end.*/

    /*FixedTimer start.*/
    $m("FixedTimer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"New","is":true,"t":8,"pi":[{"n":"func","pt":Function,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"loop","dv":1,"o":true,"pt":$n[0].Int32,"ps":2},{"n":"unscaled","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"New","rt":FixedTimer,"p":[Function,$n[0].Single,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"Reset","t":8,"pi":[{"n":"func","pt":Function,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"loop","dv":1,"o":true,"pt":$n[0].Int32,"ps":2},{"n":"unscaled","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"Reset","rt":$n[0].Void,"p":[Function,$n[0].Single,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"func","t":4,"rt":Function,"sn":"func"},{"a":1,"n":"loop","t":4,"rt":$n[0].Int32,"sn":"loop","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"running","t":4,"rt":$n[0].Boolean,"sn":"running","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"time","t":4,"rt":$n[0].Single,"sn":"time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"unscaled","t":4,"rt":$n[0].Boolean,"sn":"unscaled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*FixedTimer end.*/

    /*FrameTimer start.*/
    $m("FrameTimer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Init","t":8,"pi":[{"n":"func","pt":Function,"ps":0},{"n":"nFrameCount","pt":$n[0].Int32,"ps":1},{"n":"loop","dv":1,"o":true,"pt":$n[0].Int32,"ps":2}],"sn":"Init","rt":$n[0].Void,"p":[Function,$n[0].Int32,$n[0].Int32]},{"a":2,"n":"New","is":true,"t":8,"pi":[{"n":"func","pt":Function,"ps":0},{"n":"nFrameCount","pt":$n[0].Int32,"ps":1},{"n":"loop","pt":$n[0].Int32,"ps":2}],"sn":"New","rt":FrameTimer,"p":[Function,$n[0].Int32,$n[0].Int32]},{"a":2,"n":"Reset","t":8,"pi":[{"n":"func","pt":Function,"ps":0},{"n":"nFrameCount","pt":$n[0].Int32,"ps":1},{"n":"loop","pt":$n[0].Int32,"ps":2}],"sn":"Reset","rt":$n[0].Void,"p":[Function,$n[0].Int32,$n[0].Int32]},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":2,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"func","t":4,"rt":Function,"sn":"func"},{"a":1,"n":"loop","t":4,"rt":$n[0].Int32,"sn":"loop","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"nNowFrame","t":4,"rt":$n[0].Int32,"sn":"nNowFrame","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"nSumFrame","t":4,"rt":$n[0].Int32,"sn":"nSumFrame","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"running","t":4,"rt":$n[0].Boolean,"sn":"running","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*FrameTimer end.*/

    /*TimeOutGenerator start.*/
    $m("TimeOutGenerator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Init","t":8,"pi":[{"n":"fInternalTime","dv":1.0,"o":true,"pt":$n[0].Single,"ps":0}],"sn":"Init","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"New","is":true,"t":8,"pi":[{"n":"fInternalTime","pt":$n[0].Single,"ps":0}],"sn":"New","rt":TimeOutGenerator,"p":[$n[0].Single]},{"a":2,"n":"Reset","t":8,"sn":"Reset","rt":$n[0].Void},{"a":2,"n":"orTimeOut","t":8,"sn":"orTimeOut","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"orTimeOutWithSpecialTime","t":8,"pi":[{"n":"fInternalTime","pt":$n[0].Single,"ps":0}],"sn":"orTimeOutWithSpecialTime","rt":$n[0].Boolean,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"fInternalTime","t":4,"rt":$n[0].Single,"sn":"fInternalTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"fLastUpdateTime","t":4,"rt":$n[0].Single,"sn":"fLastUpdateTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TimeOutGenerator end.*/

    /*TimeMgr start.*/
    $m("TimeMgr", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddListener","t":8,"pi":[{"n":"func","pt":Function,"ps":0}],"sn":"AddListener","rt":$n[0].Void,"p":[Function]},{"a":2,"n":"RemoveListener","t":8,"pi":[{"n":"func","pt":Function,"ps":0}],"sn":"RemoveListener","rt":$n[0].Void,"p":[Function]},{"a":2,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"mapUpdateFunc","t":4,"rt":$n[4].List$1(Function),"sn":"mapUpdateFunc","ro":true}]}; }, $n);
    /*TimeMgr end.*/

    /*Timer start.*/
    $m("Timer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"New","is":true,"t":8,"pi":[{"n":"func","pt":Function,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"loop","dv":1,"o":true,"pt":$n[0].Int32,"ps":2},{"n":"unscaled","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"New","rt":Timer,"p":[Function,$n[0].Single,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"Reset","t":8,"pi":[{"n":"func","pt":Function,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"loop","dv":1,"o":true,"pt":$n[0].Int32,"ps":2},{"n":"unscaled","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"Reset","rt":$n[0].Void,"p":[Function,$n[0].Single,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"func","t":4,"rt":Function,"sn":"func"},{"a":1,"n":"loop","t":4,"rt":$n[0].Int32,"sn":"loop","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"running","t":4,"rt":$n[0].Boolean,"sn":"running","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"time","t":4,"rt":$n[0].Single,"sn":"time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"unscaled","t":4,"rt":$n[0].Boolean,"sn":"unscaled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Timer end.*/

    /*TimerWithGo start.*/
    $m("TimerWithGo", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"New","t":8,"pi":[{"n":"go","pt":$n[1].GameObject,"ps":0},{"n":"func","pt":Function,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"loop","dv":1,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"unscaled","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4}],"sn":"New","rt":TimerWithGo,"p":[$n[1].GameObject,Function,$n[0].Single,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"func","t":4,"rt":Function,"sn":"func"},{"a":2,"n":"go","t":4,"rt":$n[1].GameObject,"sn":"go"},{"a":1,"n":"loop","t":4,"rt":$n[0].Int32,"sn":"loop","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"running","t":4,"rt":$n[0].Boolean,"sn":"running","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"time","t":4,"rt":$n[0].Single,"sn":"time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"unscaled","t":4,"rt":$n[0].Boolean,"sn":"unscaled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*TimerWithGo end.*/

    /*GameLauncher start.*/
    $m("GameLauncher", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*GameLauncher end.*/

    /*CommonResSerialization start.*/
    $m("CommonResSerialization", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FindAudioClip","t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0}],"sn":"FindAudioClip","rt":$n[1].AudioClip,"p":[$n[0].String]},{"a":2,"n":"FindMaterial","t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0}],"sn":"FindMaterial","rt":$n[1].Material,"p":[$n[0].String]},{"a":2,"n":"FindPrefab","t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0}],"sn":"FindPrefab","rt":$n[1].GameObject,"p":[$n[0].String]},{"a":2,"n":"FindPrefabByPrefixName","t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0}],"sn":"FindPrefabByPrefixName","rt":$n[1].GameObject,"p":[$n[0].String]},{"a":2,"n":"FindShader","t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0}],"sn":"FindShader","rt":$n[1].Shader,"p":[$n[0].String]},{"a":2,"n":"FindSprite","t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0}],"sn":"FindSprite","rt":$n[1].Sprite,"p":[$n[0].String]},{"a":2,"n":"FindSpriteList","t":8,"pi":[{"n":"prefix_name","pt":$n[0].String,"ps":0}],"sn":"FindSpriteList","rt":$n[4].List$1(UnityEngine.Sprite),"p":[$n[0].String]},{"a":2,"n":"FindTextAsset","t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0}],"sn":"FindTextAsset","rt":$n[1].TextAsset,"p":[$n[0].String]},{"a":2,"n":"FindTexture","t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0}],"sn":"FindTexture","rt":$n[1].Texture,"p":[$n[0].String]},{"a":2,"n":"GetAtlas","t":8,"pi":[{"n":"atlasName","pt":$n[0].String,"ps":0}],"sn":"GetAtlas","rt":$n[6].SpriteAtlas,"p":[$n[0].String]},{"a":2,"n":"GetSpriteByAtlas","t":8,"pi":[{"n":"atlasName","pt":$n[0].String,"ps":0},{"n":"spriteName","pt":$n[0].String,"ps":1}],"sn":"GetSpriteByAtlas","rt":$n[1].Sprite,"p":[$n[0].String,$n[0].String]},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"mResFolder","t":4,"rt":$n[0].String,"sn":"mResFolder"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"mResSuffix","t":4,"rt":$n[0].String,"sn":"mResSuffix"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"m_AtlasList","t":4,"rt":$n[4].List$1(UnityEngine.U2D.SpriteAtlas),"sn":"m_AtlasList"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"m_AudoClipList","t":4,"rt":$n[4].List$1(UnityEngine.AudioClip),"sn":"m_AudoClipList"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"m_MaterialList","t":4,"rt":$n[4].List$1(UnityEngine.Material),"sn":"m_MaterialList"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"m_PrefabList","t":4,"rt":$n[4].List$1(UnityEngine.GameObject),"sn":"m_PrefabList"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"m_ShaderList","t":4,"rt":$n[4].List$1(UnityEngine.Shader),"sn":"m_ShaderList"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"m_SpriteList","t":4,"rt":$n[4].List$1(UnityEngine.Sprite),"sn":"m_SpriteList"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"m_TextAssetList","t":4,"rt":$n[4].List$1(UnityEngine.TextAsset),"sn":"m_TextAssetList"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"m_TextureList","t":4,"rt":$n[4].List$1(UnityEngine.Texture),"sn":"m_TextureList"}]}; }, $n);
    /*CommonResSerialization end.*/

    /*DbSaveByOnApplicationPauseMgr start.*/
    $m("DbSaveByOnApplicationPauseMgr", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddListener","t":8,"pi":[{"n":"mFunc","pt":Function,"ps":0}],"sn":"AddListener","rt":$n[0].Void,"p":[Function]},{"a":1,"n":"Fire","t":8,"sn":"Fire","rt":$n[0].Void},{"a":1,"n":"OnApplicationPause","t":8,"pi":[{"n":"pauseStatus","pt":$n[0].Boolean,"ps":0}],"sn":"OnApplicationPause","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":2,"n":"RemoveListener","t":8,"pi":[{"n":"mFunc","pt":Function,"ps":0}],"sn":"RemoveListener","rt":$n[0].Void,"p":[Function]},{"a":1,"n":"mPauseEventList","t":4,"rt":$n[4].List$1(Function),"sn":"mPauseEventList","ro":true}]}; }, $n);
    /*DbSaveByOnApplicationPauseMgr end.*/

    /*PrintTool start.*/
    $m("PrintTool", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Assert","is":true,"t":8,"pi":[{"n":"isTrue","pt":$n[0].Boolean,"ps":0},{"n":"data1","dv":null,"o":true,"pt":$n[0].Object,"ps":1},{"n":"data2","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"data3","dv":null,"o":true,"pt":$n[0].Object,"ps":3},{"n":"data4","dv":null,"o":true,"pt":$n[0].Object,"ps":4},{"n":"data5","dv":null,"o":true,"pt":$n[0].Object,"ps":5},{"n":"data6","dv":null,"o":true,"pt":$n[0].Object,"ps":6},{"n":"data7","dv":null,"o":true,"pt":$n[0].Object,"ps":7},{"n":"data8","dv":null,"o":true,"pt":$n[0].Object,"ps":8},{"n":"data9","dv":null,"o":true,"pt":$n[0].Object,"ps":9}],"sn":"Assert","rt":$n[0].Void,"p":[$n[0].Boolean,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object]},{"a":2,"n":"AssertFormat","is":true,"t":8,"pi":[{"n":"isTrue","pt":$n[0].Boolean,"ps":0},{"n":"formatStr","pt":$n[0].String,"ps":1},{"n":"data1","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"data2","dv":null,"o":true,"pt":$n[0].Object,"ps":3},{"n":"data3","dv":null,"o":true,"pt":$n[0].Object,"ps":4},{"n":"data4","dv":null,"o":true,"pt":$n[0].Object,"ps":5},{"n":"data5","dv":null,"o":true,"pt":$n[0].Object,"ps":6},{"n":"data6","dv":null,"o":true,"pt":$n[0].Object,"ps":7},{"n":"data7","dv":null,"o":true,"pt":$n[0].Object,"ps":8},{"n":"data8","dv":null,"o":true,"pt":$n[0].Object,"ps":9},{"n":"data9","dv":null,"o":true,"pt":$n[0].Object,"ps":10}],"sn":"AssertFormat","rt":$n[0].Void,"p":[$n[0].Boolean,$n[0].String,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object]},{"a":1,"n":"GetStr","is":true,"t":8,"pi":[{"n":"data1","pt":$n[0].Object,"ps":0},{"n":"data2","dv":null,"o":true,"pt":$n[0].Object,"ps":1},{"n":"data3","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"data4","dv":null,"o":true,"pt":$n[0].Object,"ps":3},{"n":"data5","dv":null,"o":true,"pt":$n[0].Object,"ps":4},{"n":"data6","dv":null,"o":true,"pt":$n[0].Object,"ps":5},{"n":"data7","dv":null,"o":true,"pt":$n[0].Object,"ps":6},{"n":"data8","dv":null,"o":true,"pt":$n[0].Object,"ps":7},{"n":"data9","dv":null,"o":true,"pt":$n[0].Object,"ps":8}],"sn":"GetStr","rt":$n[0].String,"p":[$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object]},{"a":2,"n":"Log","is":true,"t":8,"pi":[{"n":"data1","pt":$n[0].Object,"ps":0},{"n":"data2","dv":null,"o":true,"pt":$n[0].Object,"ps":1},{"n":"data3","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"data4","dv":null,"o":true,"pt":$n[0].Object,"ps":3},{"n":"data5","dv":null,"o":true,"pt":$n[0].Object,"ps":4},{"n":"data6","dv":null,"o":true,"pt":$n[0].Object,"ps":5},{"n":"data7","dv":null,"o":true,"pt":$n[0].Object,"ps":6},{"n":"data8","dv":null,"o":true,"pt":$n[0].Object,"ps":7},{"n":"data9","dv":null,"o":true,"pt":$n[0].Object,"ps":8}],"sn":"Log","rt":$n[0].Void,"p":[$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object]},{"a":2,"n":"LogError","is":true,"t":8,"pi":[{"n":"data1","pt":$n[0].Object,"ps":0},{"n":"data2","dv":null,"o":true,"pt":$n[0].Object,"ps":1},{"n":"data3","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"data4","dv":null,"o":true,"pt":$n[0].Object,"ps":3},{"n":"data5","dv":null,"o":true,"pt":$n[0].Object,"ps":4},{"n":"data6","dv":null,"o":true,"pt":$n[0].Object,"ps":5},{"n":"data7","dv":null,"o":true,"pt":$n[0].Object,"ps":6},{"n":"data8","dv":null,"o":true,"pt":$n[0].Object,"ps":7},{"n":"data9","dv":null,"o":true,"pt":$n[0].Object,"ps":8}],"sn":"LogError","rt":$n[0].Void,"p":[$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object]},{"a":2,"n":"LogErrorFormat","is":true,"t":8,"pi":[{"n":"formatStr","pt":$n[0].String,"ps":0},{"n":"data1","pt":$n[0].Object,"ps":1},{"n":"data2","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"data3","dv":null,"o":true,"pt":$n[0].Object,"ps":3},{"n":"data4","dv":null,"o":true,"pt":$n[0].Object,"ps":4},{"n":"data5","dv":null,"o":true,"pt":$n[0].Object,"ps":5},{"n":"data6","dv":null,"o":true,"pt":$n[0].Object,"ps":6},{"n":"data7","dv":null,"o":true,"pt":$n[0].Object,"ps":7},{"n":"data8","dv":null,"o":true,"pt":$n[0].Object,"ps":8},{"n":"data9","dv":null,"o":true,"pt":$n[0].Object,"ps":9}],"sn":"LogErrorFormat","rt":$n[0].Void,"p":[$n[0].String,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object]},{"a":2,"n":"LogFormat","is":true,"t":8,"pi":[{"n":"formatStr","pt":$n[0].String,"ps":0},{"n":"data1","pt":$n[0].Object,"ps":1},{"n":"data2","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"data3","dv":null,"o":true,"pt":$n[0].Object,"ps":3},{"n":"data4","dv":null,"o":true,"pt":$n[0].Object,"ps":4},{"n":"data5","dv":null,"o":true,"pt":$n[0].Object,"ps":5},{"n":"data6","dv":null,"o":true,"pt":$n[0].Object,"ps":6},{"n":"data7","dv":null,"o":true,"pt":$n[0].Object,"ps":7},{"n":"data8","dv":null,"o":true,"pt":$n[0].Object,"ps":8},{"n":"data9","dv":null,"o":true,"pt":$n[0].Object,"ps":9}],"sn":"LogFormat","rt":$n[0].Void,"p":[$n[0].String,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object]},{"a":2,"n":"LogFormatWithColor","is":true,"t":8,"pi":[{"n":"formatStr","pt":$n[0].String,"ps":0},{"n":"data1","pt":$n[0].Object,"ps":1},{"n":"data2","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"data3","dv":null,"o":true,"pt":$n[0].Object,"ps":3},{"n":"data4","dv":null,"o":true,"pt":$n[0].Object,"ps":4},{"n":"data5","dv":null,"o":true,"pt":$n[0].Object,"ps":5},{"n":"data6","dv":null,"o":true,"pt":$n[0].Object,"ps":6},{"n":"data7","dv":null,"o":true,"pt":$n[0].Object,"ps":7},{"n":"data8","dv":null,"o":true,"pt":$n[0].Object,"ps":8},{"n":"data9","dv":null,"o":true,"pt":$n[0].Object,"ps":9}],"sn":"LogFormatWithColor","rt":$n[0].Void,"p":[$n[0].String,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object]},{"a":2,"n":"LogJsonObj","is":true,"t":8,"pi":[{"n":"data","pt":$n[0].Object,"ps":0}],"sn":"LogJsonObj","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"LogWithColor","is":true,"t":8,"pi":[{"n":"data1","pt":$n[0].Object,"ps":0},{"n":"data2","dv":null,"o":true,"pt":$n[0].Object,"ps":1},{"n":"data3","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"data4","dv":null,"o":true,"pt":$n[0].Object,"ps":3},{"n":"data5","dv":null,"o":true,"pt":$n[0].Object,"ps":4},{"n":"data6","dv":null,"o":true,"pt":$n[0].Object,"ps":5},{"n":"data7","dv":null,"o":true,"pt":$n[0].Object,"ps":6},{"n":"data8","dv":null,"o":true,"pt":$n[0].Object,"ps":7},{"n":"data9","dv":null,"o":true,"pt":$n[0].Object,"ps":8}],"sn":"LogWithColor","rt":$n[0].Void,"p":[$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object]},{"a":1,"n":"mStringBuilder","is":true,"t":4,"rt":$n[7].StringBuilder,"sn":"mStringBuilder","ro":true}]}; }, $n);
    /*PrintTool end.*/

    /*RandomTool start.*/
    $m("RandomTool", function () { return {"att":385,"a":2,"s":true,"m":[{"n":".cctor","t":1,"sn":"ctor","sm":true},{"a":2,"n":"GetIndexByRate","is":true,"t":8,"pi":[{"n":"rateArray","pt":$n[4].List$1(System.Int32),"ps":0}],"sn":"GetIndexByRate","rt":$n[0].Int32,"p":[$n[4].List$1(System.Int32)],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Random","is":true,"t":8,"pi":[{"n":"number","pt":$n[0].Int32,"ps":0}],"sn":"Random","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"RandomArrayIndex","is":true,"t":8,"pi":[{"n":"min","pt":$n[0].Int32,"ps":0},{"n":"max","pt":$n[0].Int32,"ps":1}],"sn":"RandomArrayIndex","rt":$n[0].Int32,"p":[$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"RandomInt","is":true,"t":8,"pi":[{"n":"min","pt":$n[0].Int32,"ps":0},{"n":"max","pt":$n[0].Int32,"ps":1}],"sn":"RandomInt","rt":$n[0].Int32,"p":[$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"random","is":true,"t":4,"rt":$n[0].Random,"sn":"random","ro":true}]}; }, $n);
    /*RandomTool end.*/

    /*Singleton$1 start.*/
    $m("Singleton$1", function (T) { return {"att":1048705,"a":2,"m":[{"a":3,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Instance","is":true,"t":16,"rt":T,"g":{"a":2,"n":"get_Instance","t":8,"rt":T,"fg":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"readOnlyInstance","is":true,"t":16,"rt":T,"g":{"a":2,"n":"get_readOnlyInstance","t":8,"rt":T,"fg":"readOnlyInstance","is":true},"fn":"readOnlyInstance"},{"a":1,"n":"instance","is":true,"t":4,"rt":T,"sn":"instance"}]}; }, $n);
    /*Singleton$1 end.*/

    /*SingleTonMonoBehaviour$1 start.*/
    $m("SingleTonMonoBehaviour$1", function (T) { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"v":true,"a":3,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":T,"g":{"a":2,"n":"get_Instance","t":8,"rt":T,"fg":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"readOnlyInstance","is":true,"t":16,"rt":T,"g":{"a":2,"n":"get_readOnlyInstance","t":8,"rt":T,"fg":"readOnlyInstance","is":true},"fn":"readOnlyInstance"},{"a":1,"n":"m_Instance","is":true,"t":4,"rt":T,"sn":"m_Instance"}]}; }, $n);
    /*SingleTonMonoBehaviour$1 end.*/

    /*UnityEngineObjectExtention start.*/
    $m("UnityEngineObjectExtention", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"AddMissComponent","is":true,"t":8,"pi":[{"n":"obj","pt":$n[1].GameObject,"ps":0}],"tpc":1,"tprm":["T"],"sn":"AddMissComponent","rt":System.Object,"p":[$n[1].GameObject]},{"a":2,"n":"AddMissComponent","is":true,"t":8,"pi":[{"n":"go","pt":$n[1].GameObject,"ps":0},{"n":"t","pt":$n[0].Type,"ps":1}],"sn":"AddMissComponent$1","rt":$n[1].Component,"p":[$n[1].GameObject,$n[0].Type]},{"a":2,"n":"FindDeepChild","is":true,"t":8,"pi":[{"n":"aParent","pt":$n[1].Transform,"ps":0},{"n":"aName","pt":$n[0].String,"ps":1}],"sn":"FindDeepChild","rt":$n[1].Transform,"p":[$n[1].Transform,$n[0].String]},{"a":2,"n":"GetTreeName","is":true,"t":8,"pi":[{"n":"go","pt":$n[1].GameObject,"ps":0}],"sn":"GetTreeName","rt":$n[0].String,"p":[$n[1].GameObject]},{"a":2,"n":"SetAlpha","is":true,"t":8,"pi":[{"n":"obj","pt":$n[3].Image,"ps":0},{"n":"alpha","pt":$n[0].Single,"ps":1}],"sn":"SetAlpha","rt":$n[0].Void,"p":[$n[3].Image,$n[0].Single]},{"a":2,"n":"rectTransform","is":true,"t":8,"pi":[{"n":"go","pt":$n[1].GameObject,"ps":0}],"sn":"rectTransform","rt":$n[1].RectTransform,"p":[$n[1].GameObject]},{"a":2,"n":"rectTransform","is":true,"t":8,"pi":[{"n":"go","pt":$n[1].Transform,"ps":0}],"sn":"rectTransform$1","rt":$n[1].RectTransform,"p":[$n[1].Transform]},{"a":2,"n":"removeAllChildren","is":true,"t":8,"pi":[{"n":"obj","pt":$n[1].GameObject,"ps":0}],"sn":"removeAllChildren","rt":$n[0].Void,"p":[$n[1].GameObject]}]}; }, $n);
    /*UnityEngineObjectExtention end.*/

    /*WWWTools start.*/
    $m("WWWTools", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"PostJsonData","t":8,"pi":[{"n":"url","pt":$n[0].String,"ps":0},{"n":"json","pt":$n[0].String,"ps":1},{"n":"result","dv":null,"o":true,"pt":Function,"ps":2}],"sn":"PostJsonData","rt":$n[0].Void,"p":[$n[0].String,$n[0].String,Function]},{"a":1,"n":"PostJsonData1","t":8,"pi":[{"n":"url","pt":$n[0].String,"ps":0},{"n":"json","pt":$n[0].String,"ps":1},{"n":"result","dv":null,"o":true,"pt":Function,"ps":2}],"sn":"PostJsonData1","rt":$n[5].IEnumerator,"p":[$n[0].String,$n[0].String,Function]}]}; }, $n);
    /*WWWTools end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DentedPixel.LeanDummy start.*/
    $m("DentedPixel.LeanDummy", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*DentedPixel.LeanDummy end.*/

    }});
