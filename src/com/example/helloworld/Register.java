package com.example.helloworld;

import org.apache.cordova.DroidGap;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

public class Register extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.loadUrl("file:///android_asset/www/Register.html");
		//setContentView(R.layout.activity_register);
	}
}
