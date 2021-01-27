//
//  ContentView.swift
//  SecureFieldSwiftUI
//
//  Created by HG on 2021/01/27.
//

import SwiftUI

struct ContentView: View {
    @State var email = ""
    @State var password = ""
        
    var body: some View {
        VStack {
            TextField("Email", text: $email)
                .padding()
                .background(Color(.systemGray6))
                .cornerRadius(25)
            
            SecureField("Password", text: $password)
                .padding()
                .background(Color(.systemGray6))
                .cornerRadius(25)
        }
        .padding([.leading, .trailing])
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
