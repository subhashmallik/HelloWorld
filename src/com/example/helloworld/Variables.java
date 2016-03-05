package com.example.helloworld;

import org.apache.cordova.DroidGap;

import android.content.Intent;
import android.webkit.WebView;

public class Variables {
	 private WebView mAppView;
	    private DroidGap mGap;

	    public Variables(DroidGap gap, WebView view)
	    {
	        mAppView = view;
	        mGap = gap;
	    }

	    public void changeActivity(){     
	        Intent intent = new Intent(mGap, Register.class);
	        mGap.startActivity(intent);
	    }

}
