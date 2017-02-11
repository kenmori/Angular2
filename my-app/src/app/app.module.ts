import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({//NgModuleデコレータを使い構成要素を登録する
  declarations: [//declarationsプロパティにcompoennt, directive, pipeを登録する
    AppComponent
  ],
  imports: [//他の@NgModuleで定義されたmodule
    BrowserModule,//ngIfクラス、DecimalPipeなど基本機能が含まれる
    FormsModule,
    HttpModule
  ],
  providers: [],//DI元のクラス
  bootstrap: [AppComponent]//最初に起動するコンポーネント
})
export class AppModule { }//@NgModuleの設定情報をAppModuleクラスとして公開する
