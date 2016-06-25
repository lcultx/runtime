import {ObjectBase} from '../../../common/lang/ObjectBase';

//==========================================================
// <T>资源存储。</T>
//
// @class
// @author maocy
// @version 150507
//==========================================================
export class FResourceStorage extends ObjectBase {
   //..........................................................
   // @attribute
   protected _ready = false;
   protected _dataLength = 0;
   //_resource = MO.Class.register(o, new MO.AGetSet('_resource'));
   protected _resource = null;

   //==========================================================
   // <T>构造处理。</T>
   //
   // @method
   //==========================================================
   public constructor() {
      super();
   }

   //==========================================================
   // <T>测试是否准备好。</T>
   //
   // @method
   // @return Boolean 是否准备好
   //==========================================================
   public testReady() {
      return this._ready;
   }

   //==========================================================
   // <T>加载事件完成后，响应的处理。</T>
   //
   // @method
   // @param buffer:ArrayBuffer 数据
   //==========================================================
   public load(buffer) {
   }

   //==========================================================
   // <T>释放处理。</T>
   //
   // @method
   //==========================================================
   public complete() {
   }

   //==========================================================
   // <T>释放处理。</T>
   //
   // @method
   //==========================================================
   public dispose() {
      // 清空属性
      this._resource = null;
      // 父处理
      super.dispose();
   }
}