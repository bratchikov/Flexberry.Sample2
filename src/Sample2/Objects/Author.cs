﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace NewPlatform.Sample2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Author.
    /// </summary>
    //  *** Start programmer edit section *** (Author CustomAttributes)

    //  *** End programmer edit section *** (Author CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("AuthorE", new string[] {
            "Name as \'Name\'"})]
    [View("AuthorL", new string[] {
            "Name as \'Name\'"})]
    public class Author : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        //  *** Start programmer edit section *** (Author CustomMembers)

        //  *** End programmer edit section *** (Author CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        //  *** Start programmer edit section *** (Author.Name CustomAttributes)

        //  *** End programmer edit section *** (Author.Name CustomAttributes)
        [StrLen(255)]
        [NotNull()]
        public virtual string Name
        {
            get
            {
                //  *** Start programmer edit section *** (Author.Name Get start)

                //  *** End programmer edit section *** (Author.Name Get start)
                string result = this.fName;
                //  *** Start programmer edit section *** (Author.Name Get end)

                //  *** End programmer edit section *** (Author.Name Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Author.Name Set start)

                //  *** End programmer edit section *** (Author.Name Set start)
                this.fName = value;
                //  *** Start programmer edit section *** (Author.Name Set end)

                //  *** End programmer edit section *** (Author.Name Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "AuthorE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View AuthorE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("AuthorE", typeof(NewPlatform.Sample2.Author));
                }
            }
            
            /// <summary>
            /// "AuthorL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View AuthorL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("AuthorL", typeof(NewPlatform.Sample2.Author));
                }
            }
        }
    }
}
