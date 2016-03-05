package com.example.helloworld;
import org.apache.cordova.*;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.util.Log;

public class MainActivity extends DroidGap {
    
	Variables mc;
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		 super.init(); // Calling this is necessary to make this work
		 mc = new Variables(this, appView);
		 appView.addJavascriptInterface(mc, "MyCls");
		// showSplashScreen(5000);
		// spinnerStart("", "loading...");
		 
		  appView.addJavascriptInterface(this, "MainActivity");
		super.loadUrl("file:///android_asset/www/Login.html");
    }
	public void customFunctionCalled() {
	    Log.e("Custom Function Called", "Custom Function Called");
	}
	@Override
	public void onDestroy() {
		// TODO Auto-generated method stub
		super.onDestroy();
		Log.d("onDestroy", "onDestroy called");
	}
	@Override
	protected void onPause() {
		// TODO Auto-generated method stub
		super.onPause();
		Log.d("onPause", "Pause called");
		finish();
	}
	@Override
	protected void onResume() {
		// TODO Auto-generated method stub
		super.onResume();
		Log.d("onResume", "Resume called");
		
	}
	@Override
	protected void showSplashScreen(int time) {
		// TODO Auto-generated method stub
		super.showSplashScreen(time);
	}
	@Override
	@SuppressLint("NewApi")
	public void init(CordovaWebView webView, CordovaWebViewClient webViewClient, CordovaChromeClient webChromeClient) {
		// TODO Auto-generated method stub
		super.init(webView, webViewClient, webChromeClient);
	}
	
	/*@Override
	public void spinnerStart(String title, String message) {
		// TODO Auto-generated method stub
		super.spinnerStart(title, message);
	}*/
	

		//setContentView(R.layout.activity_main);
}

